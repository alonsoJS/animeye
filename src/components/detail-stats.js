import React from 'react';

function DetailStats(props) {
  const {
    score,
    scoreUsrQty,
    rankedStat,
    popularityStat,
    membersStat
  } = props;

  return (
    <div className="detailStats uk-grid-collapse" data-uk-grid>
      <div className="detailStats__scoreContainer uk-width-1-6">
        <span className="detailStats__scoreLabel">Score</span>
        <span className="detailStats__score">{score}</span>
        <span className="detailStats__userQty">From {scoreUsrQty} users</span>
      </div>
      <div className="detailStats__otherStatsContainer uk-width-5-6">
        <span className="detailStats__statLabel">Ranked <span className="detailStats__stat">#{rankedStat}</span></span>
        <span className="detailStats__statLabel">Popularity <span className="detailStats__stat">#{popularityStat}</span></span>
        <span className="detailStats__statLabel">Members <span className="detailStats__stat">{membersStat}</span></span>
      </div>
    </div>
  )
}

export default DetailStats;
