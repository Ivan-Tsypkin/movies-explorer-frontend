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
