import { combineReducers } from 'redux';

import ThemeOptions from './ThemeOptions';

import { user } from '../modules/user/redux/reducers';
import { auth } from '../modules/auth/redux/reducers';

import { tradeDashboard } from '../modules/overview/redux/reducers';
import { auctionDashboard } from '../modules/auction/redux/reducers';
import { userAnalysis } from '../modules/user-analysis/redux/reducers';

const appReducer = combineReducers({
  ThemeOptions,
  auth,
  user,

  tradeDashboard,
  auctionDashboard,
  userAnalysis
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
