import React from 'react';
import _ from 'lodash';
import useActions from '../use-actions';
import {useStateValue} from "../context";
import Card from "../components/card";
import MasonryLayout from "../components/masonry-layout";
import MainFrame from "../components/main-frame";

function SearchResults () {
  const { search } = useActions();
  const [state] = useStateValue();

  function clickHandler () {
    search();
  }

  return (
    <MainFrame>
      <button onClick={clickHandler}>Hey</button>
      <MasonryLayout config="uk-child-width-1-2@s uk-child-width-1-5@m">
        {
          _.isEqual(state.search_results, {})
            ? 'No results'
            : state.search_results.map(item =>
              <Card key={item.mal_id} data={item}/>
            )
        }
      </MasonryLayout>
    </MainFrame>
  )
}

export default SearchResults;
