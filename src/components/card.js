import React from 'react';

function Card ({data}) {
  const {
    image_url: img,
    title,
    score,
    episodes
  } = data;

  return (
    <div className="card">
      <div className="uk-card uk-card-default card__container uk-transition-toggle">
        <img src={img} alt={title} className="card__mainImg uk-transition-scale-up uk-transition-opaque" />
        <div className="card__overlay uk-transition-slide-bottom-small">
          <div className="card__infoContainer">
            <h2 className="card__title">{title}</h2>
            <p className="card__score">Score: <span className="card__score--bold">{score}</span></p>
            <p className="card__episodes">Episodes: <span className="card__score--bold">{episodes}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
