import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
} from '@material-ui/core';
import { checkLogin } from '../../../helpers/'

import KnightHoldingChart from './knightHoldingChart'
import ArmouryHoldingChart from './armouryHoldingChart'
import TradingOfWalletChart from './tradingOfWalletChart'

function UserAnalysis(props) {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TradingOfWalletChart />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <KnightHoldingChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ArmouryHoldingChart />
        </Grid>
      </Grid>
    </Fragment>
  );
}

function mapState(state) {
  const { user } = state;
  return { user };
}
const actions = {
};

export default connect(mapState, actions)(UserAnalysis);
