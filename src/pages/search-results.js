import React from 'react';
import _ from 'lodash';
import { useStateValue } from "../context";
import Card from "../components/card";
import MasonryLayout from "../components/masonry-layout";
import MainFrame from "../components/main-frame";
import PageTitle from "../components/page-title";
import Loader from "../components/loader";

function SearchResults () {
  const [{ search_results, is_loading_info }] = useStateValue();

  if (is_loading_info) {
    return (
      <Loader text="Loading data" iconColor="#01112E" textColor="#01112E"/>
    )
  }

  if (!_.isEqual(search_results, [])) {
    return (
      <MainFrame>
        <PageTitle title="Results"/>
        <MasonryLayout config="uk-child-width-1-2 uk-child-width-1-5@m">
          {search_results.map(item => <Card key={item.mal_id} data={item}/>)}
        </MasonryLayout>
      </MainFrame>
    )
  }

  return (
    <div/>
  )
}

export default SearchResults;
