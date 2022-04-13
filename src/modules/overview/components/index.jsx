import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import NFTMarketCapAndTradingVolumeChart from './nftMarketCapAndVolumeChart'
import MarketPlaceTrendChart from './marketPlaceTrendChart.jsx'
import HolderChart from './holderChart.jsx'

function OverviewDashboard(props) {

  return (
    <Fragment>
        <NFTMarketCapAndTradingVolumeChart/>
        <MarketPlaceTrendChart/>
        <HolderChart/>
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
