import React from 'react';
import _ from 'lodash';
import useActions from '../use-actions';
import {useStateValue} from "../context";

function SearchResults () {
  const { search } = useActions();
  const [state] = useStateValue();

  function clickHandler () {
    search();
  }

  return (
    <div>
      <button onClick={clickHandler}>Hey</button>
      {
        _.isEqual(state.search_results, {}) ? 'No results': state.search_results.map(item => <div key={item.mal_id}>{item.title}</div>)
      }
    </div>
  )
}

export default SearchResults;
