import React from 'react';
import _ from 'lodash';
import {useStateValue} from "../context";

function DetailSidebar({data}) {
  const [{ is_mobile }] = useStateValue();
  const {
    title_english,
    title_japanese,
    title_synonyms,
    type,
    episodes,
    airing,
    aired,
    premiered,
    broadcast,
    producers,
    licensors,
    studios,
    genres,
    source,
    duration,
    rating
  } = data;

  return (
    <aside className="detailSidebar">
      <ul { ...is_mobile && {'data-uk-accordion': 'multiple: true'} } className="detailSidebar__ul">
        <li className="detailSidebar__accordionItem">
          <h3 className="detailSidebar__title uk-accordion-title">Alternative Titles</h3>
          <div className="uk-accordion-content detailSidebar__textContainer">
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">English: </span>
              { title_english }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Japanese: </span>
              { title_japanese }
            </p>
            {
              !_.isEqual(title_synonyms, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Synonyms: </span>
                  { title_synonyms.map(title => title).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
          </div>
        </li>
        <li className="detailSidebar__accordionItem">
          <h3 className="detailSidebar__title uk-accordion-title">Information</h3>
          <div className="uk-accordion-content detailSidebar__textContainer">
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Type: </span>
              { type }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Episodes: </span>
              { episodes }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Status: </span>
              { airing }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Aired: </span>
              { aired.from }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Premiered: </span>
              { premiered }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Broadcast: </span>
              { broadcast }
            </p>
            {
              !_.isEqual(producers, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Producers: </span>
                  { producers.map(producer => producer.name).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
            {
              !_.isEqual(licensors, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Licensors: </span>
                  { licensors.map(licensor => licensor.name).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
            {
              !_.isEqual(studios, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Studios: </span>
                  { studios.map(studio => studio.name).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Source: </span>
              { source }
            </p>
            {
              !_.isEqual(studios, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Studios: </span>
                  { studios.map(studio => studio.name).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
            {
              !_.isEqual(genres, []) && (
                <p className="detailSidebar__text">
                  <span className="detailSidebar__text--bold">Genres: </span>
                  { genres.map(genre => genre.name).reduce((prev, current) => `${prev}, ${current}`) }
                </p>
              )
            }
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Duration: </span>
              { duration }
            </p>
            <p className="detailSidebar__text">
              <span className="detailSidebar__text--bold">Rating: </span>
              { rating }
            </p>
          </div>
        </li>
      </ul>
    </aside>
  )
}

export default DetailSidebar;
