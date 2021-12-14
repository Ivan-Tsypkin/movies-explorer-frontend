import { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import cardPic from '../../images/card-pic.png';

export default function MoviesCard() {

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeCard() {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  }

  return (
    <li className="card">
      <Link className="card__image-link" to={{pathname: "https://www.youtube.com/watch?v=UXcqcdYABFw&ab_channel=MercuryStudios"}} target={"_blank"}>
        <img
          src = {cardPic}
          alt = "Фото"
          className="card__image"
        />
      </Link>
      <div className="card__caption">
        <h2 className="card__title">33 слова о дизайне</h2>
        <Switch>
          <Route path="/movies">
            <button
              type="button"
              className={`card__like-button ${isLiked ? "card__like-button_active" : ""}`}
              onClick={() => handleLikeCard()}
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              type="button"
              className="card__unlike-button"
            ></button>
          </Route>
          </Switch>
      </div>
      <p className="card__duration">1ч30м</p>
    </li>
  )
}
