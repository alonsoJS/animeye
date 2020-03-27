import React, { Fragment } from 'react';
import { restructureObjectToArray } from '../utils/utils';
import {useStateValue} from "../context";

function DetailTextBlock({text, title, related}) {
  const orderedRelated = related && restructureObjectToArray(related);
  const [{ is_mobile }] = useStateValue();

  return (
    <li className="detailTextBlock">

      {/* TITLE */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <h2 className="uk-accordion-title detailTextBlock__accordionToggle detailTextBlock__title">{title}</h2>

      <div className={`${ is_mobile ? 'uk-accordion-content' : ''}`} { ...is_mobile && { 'hidden': false}}>
        {/* MAIN TEXT BLOCK */}
        { text && <p className="detailTextBlock__text">{text}</p>}

        {/* RELATED */}
        { orderedRelated && orderedRelated.map((item, index) => (
          <Fragment key={index}>
            <h3 className="detailTextBlock__subTitle">{item.name}</h3>
            <ul className="detailTextBlock__list">
              {
                item.value.map(subitem => (
                  <li key={subitem.mal_id} className="detailTextBlock__listItem">
                    {subitem.name}
                  </li>
                ))
              }
            </ul>
          </Fragment>
        ))}
      </div>
    </li>
  )
}

export default DetailTextBlock;
