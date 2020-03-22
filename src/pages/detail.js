import React from 'react';
import MasonryLayout from "../components/masonry-layout";
import Card from "../components/card";

function Detail () {
  return (
    <MasonryLayout config="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </MasonryLayout>
  )
}

export default Detail;
