import { TradeDashboardServices } from './services';
import { TradeDashboardConstants } from './constants';

export const TradeDashboardActions = {
  getNftDashboardMarketCapVolume,
  getNftDashboardMarketPlaceTrend,
  getNftDashboardHolder,
  getNftDashboardTrader,
  getNftDashboardAveragePrice,
  getNftDashboardStaking,
  getNftStats
};

/** Get market cap and volume */
function getNftDashboardMarketCapVolume(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_REQUEST
    });
    TradeDashboardServices.getNftDashboardMarketCapVolume(nft, chainId, data)
      .then(res => {
        dispatch({
          type:
            TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type:
            TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE,
          error: error
        });
      });
  };
}

/** Get market place trend */
function getNftDashboardMarketPlaceTrend(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_REQUEST
    });
    TradeDashboardServices.getNftDashboardMarketPlaceTrend(
      nft,
      chainId,
      data
    )
      .then(res => {
        dispatch({
          type:
            TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type:
            TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_FAILURE,
          error: error
        });
      });
  };
}

/** Get holder */
function getNftDashboardHolder(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_HOLDER_REQUEST
    });
    TradeDashboardServices.getNftDashboardHolder(nft, chainId, data)
      .then(res => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_HOLDER_FAILURE,
          error: error
        });
      });
  };
}

/** Get trader */
function getNftDashboardTrader(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_TRADER_REQUEST
    });
    TradeDashboardServices.getNftDashboardTrader(nft, chainId, data)
      .then(res => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_TRADER_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_TRADER_FAILURE,
          error: error
        });
      });
  };
}

/** Get average price */
function getNftDashboardAveragePrice(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_REQUEST
    });
    TradeDashboardServices.getNftDashboardAveragePrice(nft, chainId, data)
      .then(res => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_FAILURE,
          error: error
        });
      });
  };
}

/** Get staking */
function getNftDashboardStaking(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_DASHBOARD_STAKING_REQUEST
    });
    TradeDashboardServices.getNftDashboardStaking(nft, chainId, data)
      .then(res => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_STAKING_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: TradeDashboardConstants.GET_DASHBOARD_STAKING_FAILURE,
          error: error
        });
      });
  };
}

/** Get nft stats */
function getNftStats(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: TradeDashboardConstants.GET_NFT_STATS_REQUEST
    });
    TradeDashboardServices.getNftStats(nft, chainId, data)
      .then(res => {
        dispatch({
          type: TradeDashboardConstants.GET_NFT_STATS_SUCCESS,
          payload: { [nft]: res.data.result }
        });
      })
      .catch(error => {
        dispatch({
          type: TradeDashboardConstants.GET_NFT_STATS_FAILURE,
          error: error
        });
      });
  };
}