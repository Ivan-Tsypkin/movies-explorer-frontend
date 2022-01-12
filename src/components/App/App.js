import '../../index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoPopup/InfoPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as moviesApi from '../../utils/moviesApi';
import * as mainApi from '../../utils/mainApi';


function App() {

  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(true); //  Состояние авторизации
  const [currentUser, setCurrentUser] = useState({}); //  Данные пользователя
  const [initialMovies, setInitialMovies] = useState([]); //  Массив всех карточек
  const [filteredMovies, setFilteredMovies] = useState(null); //  Массив отфильтрованных карточек
  const [faveMovies, setFaveMovies] = useState([]); // Массив с избранными фильмами
  const [filteredFaveMovies, setFilteredFaveMovies] = useState(null); // Массив с избранными фильмами, отфильтрованный
  const [faveMoviesIdList, setFaveMoviesIdList] = useState([]); //  Массив id избранных фильмов
  const [isLoading, setIsLoading] = useState(true); //  Состояние загрузки, поведение лоадера
  const [moviesCardRenderIndex, setMoviesCardRenderIndex] = useState(0);  //  Состояние начального кол-ва генерируемых карточек
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState({isOpen: false, isSuccess: true}); //  Состояние попапа

  //Установка значения кол-ва генерируемых карточек
  useEffect(() => {
    initialRenderIndex();
  }, [])

  //Получение карточек фильмов
  useEffect(() => {
    tokenCheck();
  }, [])

  //Функция установки первоначального значения генерируемых карточек фильмов, в зависимости от ширины экрана
  function initialRenderIndex() {
    if (window.innerWidth >= 990) {
      return setMoviesCardRenderIndex(12);
    } else if ((window.innerWidth < 990) && (window.innerWidth >= 630)) {
      return setMoviesCardRenderIndex(8);
    } else if (window.innerWidth < 630) {
      return setMoviesCardRenderIndex(5);
    }
  }

  //Функция установки значения кол-ва генерируемых карточек при клике на "Ещё"
  function handleSetRenderIndex() {
    if (window.innerWidth >= 1280) {
      return setMoviesCardRenderIndex(prevIndex => prevIndex + 4);
    } else if ((window.innerWidth < 1280) && (window.innerWidth >= 990)) {
      return setMoviesCardRenderIndex(prevIndex => prevIndex + 3);
    } else if (window.innerWidth < 990) {
      return setMoviesCardRenderIndex(prevIndex => prevIndex + 2);
    }
  }

  //Функция закрытия попапов
  function closeAllPopups() {
    setIsInfoTooltipPopupOpen({isOpen: false, isSuccess: isInfoTooltipPopupOpen.isSuccess});
  }

  //Функция проерки токена, запрос карточек фильмов
  function tokenCheck() {
    const initMovies = moviesApi.getLocalStorageMovies();
    if (initMovies) {
      setInitialMovies(initMovies);
      return Promise.all([
        mainApi.getUserInfo(),
        mainApi.getAllUserMovies(),
        ])
          .then(([userData, userMovies]) => {
            setCurrentUser(userData);
            setFaveMovies(userMovies);
            setFaveMoviesIdList(userMovies.map(i => i.movieId))
            setIsLoading(false);
            setIsLoggedIn(true);
          })
          .catch(error => {
            console.log(error);
            setIsLoggedIn(false);
            history.push("/");
          })
    }

    Promise.all([
      mainApi.getAllUserMovies(),
      mainApi.getUserInfo(),
      moviesApi.getInitialMovies(),
    ])
      .then(([userMovies, userData, movies]) => {
        setCurrentUser(userData);
        setFaveMovies(userMovies);
        setFaveMoviesIdList(userMovies.map(i => i.movieId));
        moviesApi.setLocalStorageMovies(movies);
        setInitialMovies(movies);
        setIsLoading(false);
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch(error => {
        console.log(error);
        setIsLoggedIn(false);
        history.push("/");
      })
  }

  //Функция фильтрации карточек
  function handleFilterMovies(arr, searchText, checkboxStatus) {
    const movieDuration = (checkboxStatus ? 40 : 999);  // Если чекбокс активирован, фильтруем фильмы длительностью меньше 40мин
    const filteredArray = arr.filter((item) => {
      return (item.nameRU.toLowerCase().includes(searchText.toLowerCase()) && (item.duration <= movieDuration));
    });

    return filteredArray;
  }

  //Функция фильтрации карточек по сабмиту формы поиска
  //Допускается отправить пустое поле текста, тогда отрисовываем все карточки по умолчанию
  function handleSearchSubmit(text = '', checked) {
    const filtered = handleFilterMovies(initialMovies, text, checked);
    setFilteredMovies(filtered);
  }

  //Функция фильтрации избранных карточек по сабмиту формы поиска
  function handleFaveSearchSubmit(text = '', checked) {
    const filtered = handleFilterMovies(faveMovies, text, checked);
    setFilteredFaveMovies(filtered);
  }

  //Функция регистрации пользователя
  function handleRegisterSubmit(email, name, password) {
    mainApi.register(email, name, password)
      .then(res => {
        setIsInfoTooltipPopupOpen({isOpen: true, isSuccess: true});
        handleLoginSubmit(password, email);
      })
      .catch(error => {
        console.log(error);
        setIsInfoTooltipPopupOpen({isOpen: true, isSuccess: false});
      })
  }

  //Функция авторизации пользователя
  function handleLoginSubmit(password, email) {
    mainApi.authorize(password, email)
      .then(res => {
        history.push("/movies");
        tokenCheck();
      })
      .catch(error => {
        console.log(error);
        setIsLoggedIn(false);
        history.push("/");
      })
  }

  //Функция выхода из аккаунта пользователя
  function signOut() {
    mainApi.logout()
      .then(res => {
        setIsLoggedIn(false);
        localStorage.clear();
        history.push("/");
      })
      .catch(error => {
        console.log(error);
    })
  }

  //Функция редактирования данных пользователя
  function handleUpdateUser(email, name) {
    mainApi.editUserInfo(email, name)
      .then(res => {
        setIsInfoTooltipPopupOpen({isOpen: true, isSuccess: true});
        setCurrentUser(res);
      })
      .catch(error => {
        setIsInfoTooltipPopupOpen({isOpen: true, isSuccess: false});
        console.log(error);
      })
  }

  function handleAddMovieToFave(movie) {
    mainApi.addMovieToFave(movie)
      .then(res => {
        setFaveMovies([...faveMovies, res]);
        setFaveMoviesIdList([...faveMoviesIdList, res.movieId])
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handleRemoveMovieFromFave(movie) {
    console.log(movie);
    mainApi.removeMovieFromFave(movie)
      .then(res => {
        setFilteredFaveMovies(filteredFaveMovies.filter(i => i.movieId !== movie.movieId))
        setFaveMovies(faveMovies.filter(i => i.movieId !== movie.movieId));
        setFaveMoviesIdList(faveMoviesIdList.filter(i => i !== movie.movieId))
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
      <div className="page">
        <CurrentUserContext.Provider value = {currentUser}>
          <Switch>

            <Route exact path="/">
              <Header isLoggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </Route>

            <Route exact path="/movies">
              <Header />
              <ProtectedRoute
                exact path="/movies"
                isLoggedIn={isLoggedIn}
                component = {Movies}
                  isLoading={isLoading}
                  movies={filteredMovies || initialMovies}  // Передаём либо все карточки, либо, после поиска, отфильтрованные карточки
                  moviesCardRenderIndex={moviesCardRenderIndex}
                  handleSetRenderIndex={handleSetRenderIndex}
                  onSearchSubmit={handleSearchSubmit}
                  onMovieAdd={handleAddMovieToFave}
                  onMovieRemove={handleRemoveMovieFromFave}
                  faveMoviesIdList={faveMoviesIdList}
                  faveMovies={faveMovies}
              />
              <Footer />
            </Route>

            <Route exact path="/saved-movies">
              <Header />
              <ProtectedRoute
                exact path="/saved-movies"
                isLoggedIn={isLoggedIn}
                component = {SavedMovies}
                  isLoading={isLoading}
                  faveMoviesIdList={faveMoviesIdList}
                  faveMovies={filteredFaveMovies || faveMovies}
                  onSearchSubmit={handleFaveSearchSubmit}
                  onMovieRemove={handleRemoveMovieFromFave}
              />
              <Footer />
            </Route>

            <Route exact path="/profile">
              <Header />
              <ProtectedRoute
                exact path="/profile"
                isLoggedIn={isLoggedIn}
                component = {Profile}
                  onSignOut={signOut}
                  onUpdateUser={handleUpdateUser}
              />
            </Route>

            <Route exact path="/signup">
              <Register
                onRegisterSubmit={handleRegisterSubmit}
                isLoggedIn={isLoggedIn}
                history={history}
              />
            </Route>

            <Route exact path="/signin">
              <Login
                onLoginSubmit={handleLoginSubmit}
                isLoggedIn={isLoggedIn}
                history={history}
              />
            </Route>

            <Route path="/*">
              <NotFoundPage history={history} />
            </Route>

          </Switch>
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen.isOpen}
            isSuccess={isInfoTooltipPopupOpen.isSuccess}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
  );
}

export default App;
