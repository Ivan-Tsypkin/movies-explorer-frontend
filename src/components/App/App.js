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
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import PopupWithForm from '../PopupWithForm';
import EditProfilePopup from '../EditProfilePopup'
import EditAvatarPopup from '../EditAvatarPopup'
import AddPlacePopup from '../AddPlacePopup'
import ImagePopup from '../ImagePopup';
import InfoTooltip from '../InfoTooltip';
import Login from '../Login';
import Register from '../Register';
import ProtectedRoute from '../ProtectedRoute';
import { api } from '../utils/Api';
import * as apiAuth from '../utils/apiAuth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; */


function App() {

  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
      <div className="page">
        <Switch>

          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route exact path="/movies">
            <Header />
            <Movies isLoading={isLoading}/>
            <Footer />
          </Route>

          <Route exact path="/saved-movies">
            <Header />
            <SavedMovies isLoading={isLoading}/>
            <Footer />
          </Route>

          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route exact path="/signup">
            <Register />
          </Route>

          <Route exact path="/signin">
            <Login />
          </Route>

          <Route path="/*">
            <NotFoundPage />
          </Route>

        </Switch>
      </div>
  );
}

export default App;
