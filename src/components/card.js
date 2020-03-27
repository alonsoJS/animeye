import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from "../context";

function Card ({data}) {
  const [{ is_mobile, is_touch_device }] = useStateValue();
  const {
    image_url: img,
    mal_id: id,
    title,
    score,
    episodes
  } = data;

  return (
    <Link className="card" to={`/anime/${id}/${encodeURI(title.replace(/\s+/g, '_'))}`}>
      <div className={`uk-card uk-card-default uk-card-hover card__container ${!(is_mobile || is_touch_device) && 'uk-transition-toggle'}`}>
        <img
          src={img}
          alt={title}
          className={`card__mainImg ${!(is_mobile || is_touch_device) && 'uk-transition-scale-up uk-transition-opaque'}`}
          data-uk-img />

        <div className={`card__overlay ${!(is_mobile || is_touch_device) && 'uk-transition-slide-bottom-small'}`}>
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
