/* eslint-disable no-undef */
import { sendRequestToServer, filterObject } from '../../../helpers/';

export const OverviewDashboardServices = {
    getNftDashboardMarketCapVolume,
    getNftDashboardMarketPlaceTrend,
    getNftDashboardHolder
}

/** Get market cap and volume */
function getNftDashboardMarketCapVolume(nft, chainId, data) {
    data = filterObject(data, ["range_time", "interval"])

    return sendRequestToServer({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER}/v1/dashboard/nft/${nft}/${chainId}/market-cap-volume`,
        params: data
    })
}

/** Get market place trend */
function getNftDashboardMarketPlaceTrend(nft, chainId, data) {
    data = filterObject(data, ["range_time", "interval"])

    return sendRequestToServer({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER}/v1/nft/${nft}/${chainId}/history/market-place`,
        params: data
    })
}

/** Get holder */
function getNftDashboardHolder(nft, chainId, data) {
    data = filterObject(data, ["range_time", "interval"])

    return sendRequestToServer({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER}/v1/nft/${nft}/${chainId}/history/holder`,
        params: data
    })
}

