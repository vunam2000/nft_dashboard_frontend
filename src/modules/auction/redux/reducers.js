/* eslint-disable no-case-declarations */
import { AuctionDashboardConstants } from './constants';

const initState = {
  nftStats: {}
};

export function auctionDashboard(state = initState, action) {
  switch (action.type) {
    case AuctionDashboardConstants.GET_NFT_STATS_REQUEST:
      return {
        ...state
      };
    case AuctionDashboardConstants.GET_NFT_STATS_SUCCESS:
      const newNftStats = Object.assign(state.nftStats, action.payload);

      return {
        ...state,
        error: false,
        nftStats: newNftStats
      };
    case AuctionDashboardConstants.GET_NFT_STATS_FAILURE:
      return {
        ...state,
        error: true
      };

    case AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_REQUEST:
      return {
        ...state
      };
    case AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_SUCCESS:
      return {
        ...state,
        error: false,
        auctionParticipates: action.payload
      };
    case AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_FAILURE:
      return {
        ...state,
        error: true
      };

    case AuctionDashboardConstants.GET_AUCTION_VOLUME_REQUEST:
      return {
        ...state
      };
    case AuctionDashboardConstants.GET_AUCTION_VOLUME_SUCCESS:
      return {
        ...state,
        error: false,
        auctionVolumes: action.payload
      };
    case AuctionDashboardConstants.GET_AUCTION_VOLUME_FAILURE:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
