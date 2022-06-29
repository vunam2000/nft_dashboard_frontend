import { PermissionRoute } from '../../react-router/permission';

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';

export default [
  {
    label: 'Navigation menu',
    content: [
      {
        label: PermissionRoute.TRADE.title,
        icon: DashboardTwoToneIcon,
        to: PermissionRoute.TRADE.path,
        roles: PermissionRoute.TRADE.roles
      },
      {
        label: PermissionRoute.AUCTION.title,
        icon: DashboardTwoToneIcon,
        to: PermissionRoute.AUCTION.path,
        roles: PermissionRoute.AUCTION.roles
      },
      {
        label: PermissionRoute.USER_ANALYSIS.title,
        icon: DashboardTwoToneIcon,
        to: PermissionRoute.USER_ANALYSIS.path,
        roles: PermissionRoute.USER_ANALYSIS.roles
      }
    ]
  }
];
