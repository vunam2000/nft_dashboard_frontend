/* eslint-disable no-case-declarations */
import { TradeDashboardConstants } from './constants';

const initState = {
  nftStats: {}
};

export function tradeDashboard(state = initState, action) {
  switch (action.type) {
    case TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS:
      return {
        ...state,
        error: false,
        marketCapAndVolume: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_SUCCESS:
      return {
        ...state,
        error: false,
        marketPlaceTrend: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_DASHBOARD_HOLDER_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS:
      return {
        ...state,
        error: false,
        holder: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_HOLDER_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_DASHBOARD_TRADER_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_TRADER_SUCCESS:
      return {
        ...state,
        error: false,
        trader: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_TRADER_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_SUCCESS:
      return {
        ...state,
        error: false,
        averagePrice: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_DASHBOARD_STAKING_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_DASHBOARD_STAKING_SUCCESS:
      return {
        ...state,
        error: false,
        staking: action.payload
      };
    case TradeDashboardConstants.GET_DASHBOARD_STAKING_FAILURE:
      return {
        ...state,
        error: true
      };

    case TradeDashboardConstants.GET_NFT_STATS_REQUEST:
      return {
        ...state
      };
    case TradeDashboardConstants.GET_NFT_STATS_SUCCESS:
      const newNftStats = Object.assign(state.nftStats, action.payload);

      return {
        ...state,
        error: false,
        nftStats: newNftStats
      };
    case TradeDashboardConstants.GET_NFT_STATS_FAILURE:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
