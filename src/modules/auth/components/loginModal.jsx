import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';

import {
  FormControlLabel,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  ListItemText,
  Grid,
  InputLabel,
  InputAdornment,
  IconButton,
  Input
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { AuthActions } from '../redux/actions';

import { setCookie } from '../../../helpers'

function LoginModal(props) {
  const { openLoginModal, auth } = props;
  const [state, setState] = useState({
    email: '',
    password: '',
    rememberMeChecked: true,
    showPassword: false
  });
  const { email, password, rememberMeChecked } = state;

  useEffect(() => {
    if (auth.isLogin) {
      props.handleCloseLoginModal();
      window.location.reload();
    }
  }, [auth.isLogin]);

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleLogin = () => {
    props.login({
      email: email,
      password: password
    });
  };

  const handleLoginGoogle = () => {
    window.open(
      `${process.env.REACT_APP_SERVER}/api/v1/auth/google`,
      '',
      `height=500,width=500,top=${window.innerHeight /
        2}, left=${window.innerWidth / 2}`
    );
    window.addEventListener('message', event => {
      // IMPORTANT: check the origin of the data!
      console.log(event)
      if (event.origin === process.env.REACT_APP_SERVER) {
        setCookie('token', event.data?.token)
        window.location.reload();
      }
    });
  };

  const handleRememberMe = () => {};

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Dialog
      open={openLoginModal}
      onClose={() => props.handleCloseLoginModal()}
      fullWidth
      maxWidth="xs"
      aria-labelledby="form-dialog-title">
      <DialogContent>
        <div>
          <div className="bg-secondary border-0">
            <div className="card-header d-block bg-white pt-4 pb-5">
              <div className="text-muted text-center mb-3">
                <span>Login in with</span>
              </div>
              <div className="text-center">
                <Button variant="outlined" className="mr-2 text-facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                  <span className="btn-wrapper--label">Facebook</span>
                </Button>
                <Button
                  variant="outlined"
                  className="ml-2 text-google"
                  onClick={() => handleLoginGoogle()}>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  <span className="btn-wrapper--label">Google</span>
                </Button>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    id="input-email"
                    type={'text'}
                    fullWidth
                    value={email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    id="input-password"
                    type={state.showPassword ? 'text' : 'password'}
                    fullWidth
                    value={password}
                    onChange={handleChange('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}>
                            {state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {auth?.loginError && (
                    <div style={{ color: '#f83245' }}>
                      Email or password don't correct
                    </div>
                  )}
                </Grid>
              </Grid>
              <div className="w-100">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMeChecked}
                      onChange={() => handleRememberMe()}
                      value="rememberMeChecked"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </div>
              <div className="text-center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleLogin()}
                  className="mt-4">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function mapState(state) {
  const { auth } = state;
  return { auth };
}
const actions = {
  login: AuthActions.login
};

export default connect(mapState, actions)(LoginModal);
