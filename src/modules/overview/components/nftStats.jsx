/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Grid, Card, CardContent, CardHeader, Button } from '@material-ui/core';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';

import { OverviewDashboardActions } from '../redux/actions';

function NFTStats(props) {
  const { overviewDashboard } = props;
  const [rangeTime, setRangeTime] = useState('24h');
  console.log(overviewDashboard);

  useEffect(() => {
    props.getNftStats('trava_armoury', 'bsc', {});
  }, []);

  const handleRangeTime = _rangeTime => {
    setRangeTime(_rangeTime);
  };

  let rangeTimes = {
    '24h': '24h',
    '7d': '7d',
    '30d': '30d',
    '3m': '3m'
  };

  const nftStats = overviewDashboard.nftStats;

  return (
    <Fragment>
      <Grid item xs={12}>
        <Card className="card-box mb-4" style={{ padding: '10px' }}>
          <CardHeader
            action={
              <div aria-label="button group">
                <Button
                  color="primary"
                  variant={
                    rangeTime === rangeTimes['24h'] ? 'contained' : 'text'
                  }
                  onClick={() => handleRangeTime(rangeTimes['24h'])}>
                  {rangeTimes['24h'].toUpperCase()}
                </Button>
                <Button
                  color="primary"
                  variant={
                    rangeTime === rangeTimes['7d'] ? 'contained' : 'text'
                  }
                  onClick={() => handleRangeTime(rangeTimes['7d'])}>
                  {rangeTimes['7d'].toUpperCase()}
                </Button>
                <Button
                  color="primary"
                  variant={
                    rangeTime === rangeTimes['30d'] ? 'contained' : 'text'
                  }
                  onClick={() => handleRangeTime(rangeTimes['30d'])}>
                  {rangeTimes['30d'].toUpperCase()}
                </Button>
              </div>
            }
          />
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={3}>
              <Grid item xs={4}>
                <StatsCard
                  title="Total Sale"
                  value={nftStats?.nftSale}
                  icon={<ReceiptIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Total Volume"
                  value={'$ ' + Math.round(nftStats?.tradingVolume)}
                  icon={<MonetizationOnOutlinedIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Total Sold"
                  value={nftStats?.nftSold}
                  icon={<AssessmentIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={3}>
              <Grid item xs={4}>
                <StatsCard
                  title="New Auction Listing"
                  value={nftStats?.nftSale}
                  icon={<ReceiptIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Total Volume Auction"
                  value={'$ ' + Math.round(nftStats?.tradingVolume)}
                  icon={<MonetizationOnOutlinedIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Auction Successful"
                  value={nftStats?.nftSold}
                  icon={<AssessmentIcon style={{ fontSize: 40 }} />}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
}

function StatsCard(props) {
  const { title, value, icon } = props;
  return (
    <div style={{ display: 'inline-flex' }}>
      <div style={{ alignSelf: 'center', marginRight: '10px' }}>{icon}</div>

      <div className="ml-20 uppercase">
        <div className="text-10 text-gray-1 font-bold">{title}</div>
        <strong className="mt-8 text-30 lg:text-28">{value}</strong>
      </div>
    </div>
  );
}

function mapState(state) {
  const { overviewDashboard } = state;
  return { overviewDashboard };
}
const actions = {
  getNftStats: OverviewDashboardActions.getNftStats
};

export default connect(mapState, actions)(NFTStats);
