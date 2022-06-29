/* eslint-disable no-undef */
import { sendRequestToServer, filterObject } from '../../../helpers/';

export const AuctionDashboardServices = {
  getNftStats,
  getAuctionParticipate,
  getAuctionVolume
};

/** Get NFT stats */
function getNftStats(nft, chainId, data) {
  data = filterObject(data, ['range_time']);

  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/dashboard/nft/${nft}/${chainId}/stats`,
    params: data
  });
}

/** Get Auction participate */
function getAuctionParticipate(nft, chainId, data) {
  data = filterObject(data, ['range_time', 'interval']);

  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/auction/nft/${nft}/${chainId}/history/participate`,
    params: data
  });
}

/** Get Auction volume */
function getAuctionVolume(nft, chainId, data) {
  data = filterObject(data, ['range_time', 'interval']);

  return sendRequestToServer({
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}/v1/auction/nft/${nft}/${chainId}/history/volume`,
    params: data
  });
}
