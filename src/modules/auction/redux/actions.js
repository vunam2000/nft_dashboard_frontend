import { AuctionDashboardServices } from './services';
import { AuctionDashboardConstants } from './constants';

export const AuctionDashboardActions = {
  getNftStats,
  getAuctionParticipate,
  getAuctionVolume
};

/** Get nft stats */
function getNftStats(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: AuctionDashboardConstants.GET_NFT_STATS_REQUEST
    });
    AuctionDashboardServices.getNftStats(nft, chainId, data)
      .then(res => {
        dispatch({
          type: AuctionDashboardConstants.GET_NFT_STATS_SUCCESS,
          payload: { [nft]: res.data.result }
        });
      })
      .catch(error => {
        dispatch({
          type: AuctionDashboardConstants.GET_NFT_STATS_FAILURE,
          error: error
        });
      });
  };
}

/** Get Auction participate */
function getAuctionParticipate(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_REQUEST
    });
    AuctionDashboardServices.getAuctionParticipate(nft, chainId, data)
      .then(res => {
        dispatch({
          type: AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: AuctionDashboardConstants.GET_AUCTION_PARTICIPATE_FAILURE,
          error: error
        });
      });
  };
}

/** Get Auction volume */
function getAuctionVolume(nft, chainId, data) {
  return dispatch => {
    dispatch({
      type: AuctionDashboardConstants.GET_AUCTION_VOLUME_REQUEST
    });
    AuctionDashboardServices.getAuctionVolume(nft, chainId, data)
      .then(res => {
        dispatch({
          type: AuctionDashboardConstants.GET_AUCTION_VOLUME_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: AuctionDashboardConstants.GET_AUCTION_VOLUME_FAILURE,
          error: error
        });
      });
  };
}
