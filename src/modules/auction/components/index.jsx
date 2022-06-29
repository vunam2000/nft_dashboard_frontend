/* eslint-disable no-empty-pattern */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

import NFTStats from './nftStats';
import AuctionVolumeChart from './auctionVolumeChart';
import AuctionParticipateChart from './auctionParticipateChart';

import { Spinner } from '../../../common-components';

function OverviewDashboard(props) {
  return (
    <Fragment>
      <NFTStats />
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <AuctionVolumeChart />
      </LazyLoad>
      <LazyLoad scroll={true} once={true} placeholder={<Spinner />}>
        <AuctionParticipateChart />
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
