import React, { Fragment } from 'react';
import { restructureObjectToArray } from '../utils/utils';

function DetailTextBlock({text, title, related}) {
  const orderedRelated = related && restructureObjectToArray(related);

  return (
    <div className="detailTextBlock">

      {/* TITLE */}
      <h2 className="detailTextBlock__title">{title}</h2>

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
  )
}

export default DetailTextBlock;
