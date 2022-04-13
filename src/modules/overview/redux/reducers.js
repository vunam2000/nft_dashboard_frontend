import { OverviewDashboardConstants } from './constants';

export function overviewDashboard(state = {}, action) {
    switch (action.type) {
        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_REQUEST:
            return {
                ...state,
            }
        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_SUCCESS:
            return {
                ...state,
                error: false,
                marketCapAndVolume: action.payload
            }
        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_CAP_VOLUME_FAILURE:
            return {
                ...state,
                error: true
            }

        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_REQUEST:
            return {
                ...state,
            }
        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_SUCCESS:
            return {
                ...state,
                error: false,
                marketPlaceTrend: action.payload
            }
        case OverviewDashboardConstants.GET_DASHBOARD_MARKET_PLACE_TREND_FAILURE:
            return {
                ...state,
                error: true
            }

        case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_REQUEST:
            return {
                ...state,
            }
        case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS:
            return {
                ...state,
                error: false,
                holder: action.payload
            }
        case OverviewDashboardConstants.GET_DASHBOARD_HOLDER_SUCCESS:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}