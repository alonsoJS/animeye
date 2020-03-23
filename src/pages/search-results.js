import React from 'react';
import _ from 'lodash';
import {useStateValue} from "../context";
import Card from "../components/card";
import MasonryLayout from "../components/masonry-layout";
import MainFrame from "../components/main-frame";
import Header from "../components/header";
import PageTitle from "../components/page-title";

function SearchResults () {
  const [state] = useStateValue();

  return (
    <MainFrame>
      <Header/>
      <PageTitle title="Results" />
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
