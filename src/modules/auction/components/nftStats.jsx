/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Grid, Card, CardContent, CardHeader, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';

import { AuctionDashboardActions } from '../redux/actions';

import { NFT_CONSTANTS } from '../../../constants/nft.constant';

import { numberWithCommas } from '../../../helpers';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '60px',
    color: '#06c'
  }
}));

function NFTStats(props) {
  const { auctionDashboard } = props;
  const [rangeTime, setRangeTime] = useState('7d');
  const classes = useStyles();

  useEffect(() => {
    props.getNftStats(NFT_CONSTANTS.KNIGHT, 'bsc', {
      range_time: rangeTime
    });
  }, []);

  useEffect(() => {
    props.getNftStats(NFT_CONSTANTS.KNIGHT, 'bsc', {
      range_time: rangeTime
    });
  }, [rangeTime]);

  const handleRangeTime = _rangeTime => {
    setRangeTime(_rangeTime);
  };

  let rangeTimes = {
    '24h': '24h',
    '7d': '7d',
    '30d': '30d',
    '3m': '3m'
  };

  const nftStatKnight = auctionDashboard.nftStats?.[NFT_CONSTANTS.KNIGHT];

  const nftAuctionVolume = nftStatKnight?.nftAuctionVolume
    ? Math.round(nftStatKnight.nftAuctionVolume)
    : 0;

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
                  title="New Auction Listing"
                  value={nftStatKnight?.nftNewAuction ?? 0}
                  icon={<ReceiptIcon className={classes.icon} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Total Volume Auction"
                  value={'$ ' + numberWithCommas(nftAuctionVolume)}
                  icon={<MonetizationOnOutlinedIcon className={classes.icon} />}
                />
              </Grid>
              <Grid item xs={4}>
                <StatsCard
                  title="Auction Successful"
                  value={nftStatKnight?.nftAuctionSold ?? 0}
                  icon={<AssessmentIcon className={classes.icon} />}
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

      <div className="ml-20">
        <div className="text-10 text-gray-1 font-bold">
          {title.toUpperCase()}
        </div>
        <strong
          className="mt-8 text-30 lg:text-28"
          style={{ fontSize: '25px' }}>
          {value}
        </strong>
      </div>
    </div>
  );
}

function mapState(state) {
  const { auctionDashboard } = state;
  return { auctionDashboard };
}
const actions = {
  getNftStats: AuctionDashboardActions.getNftStats
};

export default connect(mapState, actions)(NFTStats);
