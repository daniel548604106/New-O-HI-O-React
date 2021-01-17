import React from 'react';
import { TextField, FormLabel, Button } from '@material-ui/core';
import { setUserLogin } from '../../store/actions/indexActions';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { redirectUri, config } from '../../lib/oAuth';
import qs from 'query-string';
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const oAuthLogin = (provider) => {
    const uri = redirectUri(provider);
    const query = qs.stringify(config[provider]);
    // console.log(process.env.REACT_APP_FACEBOOK_URI, ' hi');
    window.location = `${uri}${query}`;

    console.log(uri);
  };
  const login = () => {
    dispatch(setUserLogin());
  };
  return (
    <div style={{ display: 'flex ', flexDirection: 'column' }}>
      <Button
        onClick={() => oAuthLogin('facebook')}
        variant="contained"
        style={{ backgroundColor: '#178fac', color: 'white' }}
      >
        Login with Facebook
      </Button>
      <Button
        onClick={() => oAuthLogin('google')}
        variant="contained"
        style={{ backgroundColor: '#fff', color: 'black' }}
      >
        Login with Google
      </Button>
      <FormLabel label="Email">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </FormLabel>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      <Button
        onClick={login}
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
