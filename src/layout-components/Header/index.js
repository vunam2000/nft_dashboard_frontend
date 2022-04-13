import React, { Fragment, useState, useEffect } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
  Hidden,
  IconButton,
  AppBar,
  Box,
  Button,
  Tooltip
} from '@material-ui/core';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../redux/ThemeOptions';
import projectLogo from '../../assets/images/react.svg';

import HeaderLogo from '../../layout-components/HeaderLogo';
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import LoginModal from '../../modules/auth/components/loginModal'

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { UserActions } from '../../modules/user/redux/actions'

import { checkLogin } from '../../helpers';

const Header = props => {
   useEffect(() => {
    console.log("props.children", props.getCurrentUser)
    if (checkLogin()) {
      props.getCurrentUser();
      // props.getLinkByUrl({
      //   url: window.location.pathname
      // });
    }
  }, []);

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const {
    headerShadow,
    headerFixed,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const handleLogin = () => {
    setOpenLoginModal(true)
  }
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false)
  }

  return (
    <Fragment>
      <LoginModal openLoginModal={openLoginModal} handleCloseLoginModal={handleCloseLoginModal}/>
      <AppBar
        color="secondary"
        className={clsx('app-header', {})}
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}>
        {!props.isCollapsedLayout && <HeaderLogo />}
        <Box className="app-header-toolbar">
          <Hidden lgUp>
            <Box
              className="app-logo-wrapper"
              title="Carolina React Admin Dashboard with Material-UI Free">
              <Link to="/DashboardDefault" className="app-logo-link">
                <IconButton
                  color="primary"
                  size="medium"
                  className="app-logo-btn">
                  <img
                    className="app-logo-img"
                    alt="Carolina React Admin Dashboard with Material-UI Free"
                    src={projectLogo}
                  />
                </IconButton>
              </Link>
              <Hidden smDown>
                <Box className="app-logo-text">NFT Analyze</Box>
              </Hidden>
            </Box>
          </Hidden>
          <Box className="d-flex align-items-center">
          </Box>
          <Box className="d-flex align-items-center">
            {checkLogin() ? (
              <HeaderUserbox />
            ) : (
              <Box className="d-flex align-items-center">
                <Button
                  className="m-1" variant="contained" color="default" size="small"
                  onClick={() => handleLogin()}>
                  Connect Wallet
                </Button>
              </Box>
            )}
            <Box className="toggle-sidebar-btn-mobile">
              <Tooltip title="Toggle Sidebar" placement="right">
                <IconButton
                  color="inherit"
                  onClick={toggleSidebarMobile}
                  size="medium">
                  {sidebarToggleMobile ? (
                    <MenuOpenRoundedIcon />
                  ) : (
                    <MenuRoundedIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerFixed: state.ThemeOptions.headerFixed,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
  getCurrentUser: () => dispatch(UserActions.getCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
