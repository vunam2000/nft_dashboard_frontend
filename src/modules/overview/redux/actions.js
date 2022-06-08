import { OverviewDashboardServices } from './services';
import { OverviewDashboardConstants } from './constants';

export const OverviewDashboardActions = {
  getNftDashboardMarketCapVolume,
  getNftDashboardMarketPlaceTrend,
  getNftDashboardHolder,
  getNftDashboardTrader,
  getNftDashboardAveragePrice,
  getNftDashboardStaking,
  getNftStats,
  getAuctionParticipate,
  getAuctionVolume
};

/** Get market cap and volume */
function getNftDashboardMarketCapVolume(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_REQUEST
    });
    OverviewDashboardServices.getNftDashboardMarketCapVolume(nft, chainId, data)
      .then(res => {
        dispatch({
          type:
            OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type:
            OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE,
          error: error
        });
      });
  };
}

/** Get market place trend */
function getNftDashboardMarketPlaceTrend(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_REQUEST
    });
    OverviewDashboardServices.getNftDashboardMarketPlaceTrend(
      nft,
      chainId,
      data
    )
      .then(res => {
        dispatch({
          type:
            OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type:
            OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_FAILURE,
          error: error
        });
      });
  };
}

/** Get holder */
function getNftDashboardHolder(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_HOLDER_REQUEST
    });
    OverviewDashboardServices.getNftDashboardHolder(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_HOLDER_FAILURE,
          error: error
        });
      });
  };
}

/** Get trader */
function getNftDashboardTrader(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_TRADER_REQUEST
    });
    OverviewDashboardServices.getNftDashboardTrader(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_TRADER_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_TRADER_FAILURE,
          error: error
        });
      });
  };
}

/** Get average price */
function getNftDashboardAveragePrice(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_REQUEST
    });
    OverviewDashboardServices.getNftDashboardAveragePrice(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_FAILURE,
          error: error
        });
      });
  };
}

/** Get staking */
function getNftDashboardStaking(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_DASHBOARD_STAKING_REQUEST
    });
    OverviewDashboardServices.getNftDashboardStaking(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_STAKING_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_STAKING_FAILURE,
          error: error
        });
      });
  };
}

/** Get nft stats */
function getNftStats(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_NFT_STATS_REQUEST
    });
    OverviewDashboardServices.getNftStats(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_NFT_STATS_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_NFT_STATS_FAILURE,
          error: error
        });
      });
  };
}

/** Get Auction participate */
function getAuctionParticipate(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_REQUEST
    });
    OverviewDashboardServices.getAuctionParticipate(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_FAILURE,
          error: error
        });
      });
  };
}

/** Get Auction volume */
function getAuctionVolume(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: OverviewDashboardConstants.GET_AUCTION_VOLUME_REQUEST
    });
    OverviewDashboardServices.getAuctionVolume(nft, chainId, data)
      .then(res => {
        dispatch({
          type: OverviewDashboardConstants.GET_AUCTION_VOLUME_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_AUCTION_VOLUME_FAILURE,
          error: error
        });
      });
  };
}
