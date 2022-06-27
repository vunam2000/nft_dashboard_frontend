/* eslint-disable no-empty-pattern */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NFTStats from './nftStats';
import NFTMarketCapAndTradingVolumeChart from './nftMarketCapAndVolumeChart';
import MarketPlaceTrendChart from './marketPlaceTrendChart';
import HolderChart from './holderChart.jsx';
import TraderChart from './traderChart.jsx';
import AverageChart from './averagePriceChart.jsx';
import KnightStakingChart from './knightStakingChart';
import AuctionVolumeChart from './auctionVolumeChart';
import AuctionParticipateChart from './auctionParticipateChart';

function OverviewDashboard(props) {
  return (
    <Fragment>
      <NFTStats />
      <NFTMarketCapAndTradingVolumeChart />
      <MarketPlaceTrendChart />
      <HolderChart />
      <TraderChart />
      <AverageChart />
      <KnightStakingChart />
      <AuctionVolumeChart />
      <AuctionParticipateChart />
    </Fragment>
  );
}

function mapState(state) {
  const {} = state;
  return {};
}
const actions = {};

export default connect(mapState, actions)(OverviewDashboard);
