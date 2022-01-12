import { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

export default function MoviesCard({
  movie,
  onMovieAdd,
  onMovieRemove,
  faveMoviesIdList,
  faveMovies
}) {

  const [isLiked, setIsLiked] = useState(false);

  function handleChangeMovieFaveStatus() {
    const currentMovie = faveMovies.find(i => i.movieId === movie.id)
    if (currentMovie) {
      return onMovieRemove(currentMovie)
    } else {
      return onMovieAdd(movie)
    }
  }

  return (
    <li className="card">
      <Link className="card__image-link" to={{pathname: movie.trailerLink}} target={"_blank"}>
        <img
          src = {`https://api.nomoreparties.co${movie.image.url || movie.image}`}
          alt = {`Постер фильма ${movie.nameRU}`}
          className="card__image"
        />
      </Link>
      <div className="card__caption">
        <h2 className="card__title">{movie.nameRU}</h2>
        <Switch>
          <Route exact path="/movies">
            <button
              type="button"
              className={`card__like-button ${faveMoviesIdList.includes(movie.id) ? "card__like-button_active" : ""}`}
              onClick={() => handleChangeMovieFaveStatus()}
            ></button>
          </Route>
          <Route exact path="/saved-movies">
            <button
              type="button"
              className="card__unlike-button"
              onClick={() => onMovieRemove(movie)}
            ></button>
          </Route>
          </Switch>
      </div>
      <p className="card__duration">
        {`${Math.floor(movie.duration / 60) ? `${Math.floor(movie.duration / 60)}ч ` : ``}${movie.duration % 60}м`}
      </p>
    </li>
  )
}
