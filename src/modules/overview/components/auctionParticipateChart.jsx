/* eslint-disable no-implied-eval */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Grid, Card, Button, Box } from '@material-ui/core';

import { OverviewDashboardActions } from '../redux/actions';

import { NFT_CONSTANTS } from '../../../constants/nft.constant';

function AuctionParticipateChart(props) {
  const { overviewDashboard } = props;
  const [rangeTime, setRangeTime] = useState('24h');
  const [interval, setInterval] = useState('1h');

  useEffect(() => {
    props.getAuctionParticipate(NFT_CONSTANTS.KNIGHT, 'bsc', {
      range_time: rangeTime,
      interval: interval
    });
  }, []);

  useEffect(() => {
    props.getAuctionParticipate(NFT_CONSTANTS.KNIGHT, 'bsc', {
      range_time: rangeTime,
      interval: interval
    });
  }, [rangeTime, interval]);

  const handleRangeTime = _rangeTime => {
    setRangeTime(_rangeTime);

    if (_rangeTime === '30d') {
      setInterval('24h');
    } else if (_rangeTime === '3m') {
      setInterval('7d');
    } else {
      setInterval('1h');
    }
  };

  let auctioneer = {};
  let bidder = {};
  let nfts = {};

  if (overviewDashboard?.auctionParticipates) {
    auctioneer = overviewDashboard.auctionParticipates.auctioneers;
    bidder = overviewDashboard.auctionParticipates.bidders;
    nfts = overviewDashboard.auctionParticipates.nfts;
  }

  let auctioneerDataCharts = [];
  let bidderDataCharts = [];
  let nftsDataCharts = [];

  for (const timestamp in auctioneer) {
    auctioneerDataCharts.push({
      x: parseInt(timestamp) * 1000,
      y: auctioneer[timestamp]
    });
  }
  for (const timestamp in bidder) {
    bidderDataCharts.push({
      x: parseInt(timestamp) * 1000,
      y: bidder[timestamp]
    });
  }
  for (const timestamp in nfts) {
    nftsDataCharts.push({
      x: parseInt(timestamp) * 1000,
      y: nfts[timestamp]
    });
  }

  let options = {
    chart: {
      zoomType: 'x'
    },
    credits: {
      enabled: false
    },
    title: {
      text: '',
      align: 'left'
    },

    yAxis: [
      {
        title: {
          text: 'Volume'
        }
      }
    ],

    xAxis: {
      type: 'datetime'
    },

    series: [
      {
        name: 'Auctioneer',
        type: 'column',
        yAxis: 0,
        data: auctioneerDataCharts
      },
      {
        name: 'Bidder',
        type: 'column',
        yAxis: 0,
        data: bidderDataCharts
      },
      {
        name: 'NFTs',
        yAxis: 0,
        type: 'spline',
        data: nftsDataCharts
      }
    ],

    legend: {
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      padding: 0,
      itemMarginBottom: 20
    }
  };

  let rangeTimes = {
    '24h': '24h',
    '7d': '7d',
    '30d': '30d',
    '3m': '3m'
  };

  return (
    <Fragment>
      <Grid item xs={12}>
        <Card className="card-box mb-4" style={{ padding: '10px' }}>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            style={{ padding: '0px 1%' }}>
            <h4>Auction Participate</h4>
            <div aria-label="button group">
              <Button
                color="primary"
                variant={rangeTime === rangeTimes['24h'] ? 'contained' : 'text'}
                onClick={() => handleRangeTime(rangeTimes['24h'])}>
                {rangeTimes['24h'].toUpperCase()}
              </Button>
              <Button
                color="primary"
                variant={rangeTime === rangeTimes['7d'] ? 'contained' : 'text'}
                onClick={() => handleRangeTime(rangeTimes['7d'])}>
                {rangeTimes['7d'].toUpperCase()}
              </Button>
              <Button
                color="primary"
                variant={rangeTime === rangeTimes['30d'] ? 'contained' : 'text'}
                onClick={() => handleRangeTime(rangeTimes['30d'])}>
                {rangeTimes['30d'].toUpperCase()}
              </Button>
              <Button
                color="primary"
                variant={rangeTime === rangeTimes['3m'] ? 'contained' : 'text'}
                onClick={() => handleRangeTime(rangeTimes['3m'])}>
                {rangeTimes['3m'].toUpperCase()}
              </Button>
            </div>
          </Box>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Card>
      </Grid>
    </Fragment>
  );
}

function mapState(state) {
  const { overviewDashboard } = state;
  return { overviewDashboard };
}
const actions = {
  getAuctionParticipate: OverviewDashboardActions.getAuctionParticipate
};

export default connect(mapState, actions)(AuctionParticipateChart);
