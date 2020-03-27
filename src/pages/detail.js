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
  const [{
    selected_item: data,
    is_loading_info,
    is_mobile
  }] = useStateValue();

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
        <div className={`uk-width-1-1 uk-width-1-4@m uk-flex-middle`} data-uk-grid>
          <div className="uk-width-1-2 uk-width-1-1@m">
            <DetailImg img={data.image_url} title={data.title} />
          </div>
          <div className="uk-width-1-2 uk-width-1-1@m">
            {
              is_mobile
                ? <DetailStats score={data.score} scoreUsrQty={data.scored_by} rankedStat={data.rank} popularityStat={data.popularity} membersStat={data.members} />
                : <DetailSidebar data={data}/>
            }
          </div>
        </div>
        <div className="uk-width-1-1 uk-width-3-4@m">
          {
            !is_mobile
              ? <DetailStats score={data.score} scoreUsrQty={data.scored_by} rankedStat={data.rank} popularityStat={data.popularity} membersStat={data.members} />
              : <DetailSidebar data={data}/>
          }
          <ul
            { ...is_mobile && {'data-uk-accordion': 'multiple: true'} }
            className={`${!is_mobile && 'detail__ul'}`}
          >
            { data.synopsis && <DetailTextBlock text={data.synopsis} title="Synopsis"/> }
            { data.background && <DetailTextBlock text={data.background} title="Background"/> }
            { data.related && <DetailTextBlock title={`Related to ${data.title}`} related={data.related}/> }
          </ul>
        </div>
      </Grid>
    </MainFrame>
  )
}

export default Detail;
