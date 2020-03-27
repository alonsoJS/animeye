import React, { useState } from 'react';
import useActions from "../use-actions";
import constants from '../constants';
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState('');
  const { search } = useActions();
  let history = useHistory();

  function submit(e) {
    e.preventDefault();
    search({query});
    history.push("/");
  }

  function onInputChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="searchBar">
      <form onSubmit={submit} className="searchBar__form">
        {/*<select className="searchBar__select uk-select">*/}
        {/*  {*/}
        {/*    constants.search_selections.map((value, index) => <option value={value} key={index}>{value}</option>)*/}
        {/*  }*/}
        {/*</select>*/}
        <input className="searchBar__searchInput uk-input" type="text" onChange={onInputChange} placeholder="Search" />
        <button type="submit" className="searchBar__submitBtn"><span className="fas fa-search"/></button>
      </form>
    </div>
  )
}

export default SearchBar;
