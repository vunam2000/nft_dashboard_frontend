import { OverviewDashboardServices } from './services';
import { OverviewDashboardConstants } from './constants';

import { clearStorage, setCookie } from '../../../helpers';

export const OverviewDashboardActions = {
  getNftDashboardMarketCapVolume,
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
          type: OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS,
          payload: res.data.result
        });
      })
      .catch(error => {
        dispatch({
          type: OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE,
          error: error
        });
      });
  };
}
