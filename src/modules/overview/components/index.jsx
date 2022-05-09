import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NFTStats from './nftStats'
import NFTMarketCapAndTradingVolumeChart from './nftMarketCapAndVolumeChart'
import MarketPlaceTrendChart from './marketPlaceTrendChart.jsx'
import HolderChart from './holderChart.jsx'
import TraderChart from './traderChart.jsx'
import AverageChart from './averagePriceChart.jsx'
import KnightStakingChart from './knightStakingChart'

function OverviewDashboard(props) {

  return (
    <Fragment>
        <NFTStats/>
        <NFTMarketCapAndTradingVolumeChart/>
        <MarketPlaceTrendChart/>
        <HolderChart/>
        <TraderChart/>
        <AverageChart/>
        <KnightStakingChart/>
    </Fragment>
  );
}

function mapState(state) {
  const {  } = state;
  return {  };
}
const actions = {
};

export default connect(mapState, actions)(OverviewDashboard);
