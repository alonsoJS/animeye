import React, { useEffect } from 'react';
import MainFrame from "../components/main-frame";
import PageTitle from "../components/page-title";
import useActions from "../use-actions";
import { useParams } from 'react-router-dom';
import { useStateValue } from "../context";
import Grid from "../components/grid";
import DetailStats from "../components/detail-stats";
import DetailImg from "../components/detail-img";
import DetailTextBlock from "../components/detail-text-block";
import _ from 'lodash';
import Loader from "../components/loader";
import DetailSidebar from "../components/detail-sidebar";

function Detail () {
  const { id } = useParams();
  const { setSelectedItemInfo } = useActions();
  const [{ selected_item: data, is_loading_info }] = useStateValue();

  // Disabling on void dependencies
  // eslint-disable-next-line
  useEffect(() => {setSelectedItemInfo(id)}, []);

  if (_.isEqual(data, {}) || is_loading_info) {
    return (
      <Loader text="Loading data" iconColor="#01112E" textColor="#01112E"/>
    )
  }

  return (
    <MainFrame>
      <PageTitle title={data.title} />
      <Grid>
        <div className="uk-width-1-4">
          <DetailImg img={data.image_url} title={data.title} />
          <DetailSidebar data={data}/>
        </div>
        <div className="uk-width-3-4">
          <DetailStats
            score={data.score}
            scoreUsrQty={data.scored_by}
            rankedStat={data.rank}
            popularityStat={data.popularity}
            membersStat={data.members}
          />
          { data.synopsis && <DetailTextBlock text={data.synopsis} title="Synopsis"/> }
          { data.background && <DetailTextBlock text={data.background} title="Background"/> }
          { data.related && <DetailTextBlock title={`Related to ${data.title}`} related={data.related}/> }
        </div>
      </Grid>
    </MainFrame>
  )
}

export default Detail;
