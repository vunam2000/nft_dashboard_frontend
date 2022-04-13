import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NFTMarketCapAndTradingVolumeChart from './nftMarketCapAndVolumeChart'
import MarketPlaceTrendChart from './marketPlaceTrendChart.jsx'
import HolderChart from './holderChart.jsx'
import TraderChart from './traderChart.jsx'
import AverageChart from './averagePriceChart.jsx'

function OverviewDashboard(props) {

  return (
    <Fragment>
        <NFTMarketCapAndTradingVolumeChart/>
        <MarketPlaceTrendChart/>
        <HolderChart/>
        <TraderChart/>
        <AverageChart/>
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
