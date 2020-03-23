import React, { useEffect } from 'react';
import MainFrame from "../components/main-frame";
import PageTitle from "../components/page-title";
import useActions from "../use-actions";
import { useParams } from 'react-router-dom';
import { useStateValue } from "../context";

function Detail () {
  const { id } = useParams();
  const { setSelectedItemInfo } = useActions();
  const [{ selected_item }] = useStateValue();

  // Disabling on void dependencies
  // eslint-disable-next-line
  useEffect(() => {setSelectedItemInfo(id)}, []);

  return (
    <MainFrame>
      <PageTitle title={selected_item.title} />
    </MainFrame>
  )
}

export default Detail;
