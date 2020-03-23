import React from 'react';
import { Link } from 'react-router-dom';

function Card ({data}) {
  const {
    image_url: img,
    mal_id: id,
    title,
    score,
    episodes
  } = data;

  return (
    <Link className="card" to={`/detail/${id}`}>
      <div className="uk-card uk-card-default card__container uk-transition-toggle">
        <img src={img} alt={title} className="card__mainImg uk-transition-scale-up uk-transition-opaque" data-uk-img />
        <div className="card__overlay uk-transition-slide-bottom-small">
          <div className="card__infoContainer">
            <h2 className="card__title">{title}</h2>
            <p className="card__score">Score: <span className="card__score--bold">{score}</span></p>
            <p className="card__episodes">Episodes: <span className="card__score--bold">{episodes}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
