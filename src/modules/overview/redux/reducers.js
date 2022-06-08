import { OverviewDashboardConstants } from './constants';

export function overviewDashboard(state = {}, action) {
  switch (action.type) {
    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS:
      return {
        ...state,
        error: false,
        marketCapAndVolume: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_SUCCESS:
      return {
        ...state,
        error: false,
        marketPlaceTrend: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS:
      return {
        ...state,
        error: false,
        holder: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_DASHBOARD_TRADER_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_TRADER_SUCCESS:
      return {
        ...state,
        error: false,
        trader: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_TRADER_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_SUCCESS:
      return {
        ...state,
        error: false,
        averagePrice: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_AVERAGE_PRICE_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_DASHBOARD_STAKING_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_DASHBOARD_STAKING_SUCCESS:
      return {
        ...state,
        error: false,
        staking: action.payload
      };
    case OverviewDashboardConstants.GET_DASHBOARD_STAKING_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_NFT_STATS_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_NFT_STATS_SUCCESS:
      return {
        ...state,
        error: false,
        nftStats: action.payload
      };
    case OverviewDashboardConstants.GET_NFT_STATS_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_SUCCESS:
      return {
        ...state,
        error: false,
        auctionParticipates: action.payload
      };
    case OverviewDashboardConstants.GET_AUCTION_PARTICIPATE_FAILURE:
      return {
        ...state,
        error: true
      };

    case OverviewDashboardConstants.GET_AUCTION_VOLUME_REQUEST:
      return {
        ...state
      };
    case OverviewDashboardConstants.GET_AUCTION_VOLUME_SUCCESS:
      return {
        ...state,
        error: false,
        auctionVolumes: action.payload
      };
    case OverviewDashboardConstants.GET_AUCTION_VOLUME_FAILURE:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
