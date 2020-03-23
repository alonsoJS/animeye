import React from 'react';
import _ from 'lodash';
import {useStateValue} from "../context";
import Card from "../components/card";
import MasonryLayout from "../components/masonry-layout";
import MainFrame from "../components/main-frame";
import PageTitle from "../components/page-title";

function SearchResults () {
  const [{ search_results }] = useStateValue();

  return (
    <MainFrame>
      <PageTitle title="Results" />
      <MasonryLayout config="uk-child-width-1-2@s uk-child-width-1-5@m">
        {
          _.isEqual(search_results, {})
            ? 'No results'
            : search_results.map(item =>
              <Card key={item.mal_id} data={item}/>
            )
        }
      </MasonryLayout>
    </MainFrame>
  )
}

export default SearchResults;
