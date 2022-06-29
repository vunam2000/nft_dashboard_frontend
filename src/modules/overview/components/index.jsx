/* eslint-disable no-empty-pattern */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

import NFTStats from './nftStats';
import NFTMarketCapAndTradingVolumeChart from './nftMarketCapAndVolumeChart';
import MarketPlaceTrendChart from './marketPlaceTrendChart';
import HolderChart from './holderChart.jsx';
import TraderChart from './traderChart.jsx';
import AverageChart from './averagePriceChart.jsx';
import KnightStakingChart from './knightStakingChart';

import { Spinner } from '../../../common-components';

function OverviewDashboard(props) {
  return (
    <Fragment>
      <NFTStats />
      <NFTMarketCapAndTradingVolumeChart />
      <LazyLoad
        scroll={true}
        height={200}
        once={true}
        placeholder={<Spinner />}>
        <MarketPlaceTrendChart />
      </LazyLoad>
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <HolderChart />
      </LazyLoad>
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <TraderChart />
      </LazyLoad>
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <AverageChart />
      </LazyLoad>
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <KnightStakingChart />
      </LazyLoad>
    </Fragment>
  );
}

function mapState(state) {
  const {} = state;
  return {};
}
const actions = {};

export default connect(mapState, actions)(OverviewDashboard);
