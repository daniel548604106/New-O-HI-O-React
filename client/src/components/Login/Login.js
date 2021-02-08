import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeLoginModal } from '../../store/index/indexAction';
import { redirectUri, config } from '../../lib/oAuth';
import qs from 'query-string';
import CloseIcon from '@material-ui/icons/Close';
const Login = () => {
  const dispatch = useDispatch();
  const oAuthLogin = (provider) => {
    dispatch(closeLoginModal());
    const uri = redirectUri(provider);
    const query = qs.stringify(config[provider]);
    window.location = `${uri}${query}`;
    console.log(uri);
  };
  const login = () => {
    dispatch(setUserLogin());
  };
  return (
    <div>
      <div
        style={{ display: 'flex ', flexDirection: 'column', position: 'relative', height: '60vh' }}
      >
        <div
          onClick={() => dispatch(closeLoginModal())}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          <CloseIcon />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <h1>O.HI.O</h1>
          <h1 style={{ fontSize: '20px', margin: '20px 0' }}>登入與註冊</h1>
          <Button
            onClick={() => oAuthLogin('facebook')}
            variant="contained"
            style={{ backgroundColor: '#3b5998', color: 'white', marginBottom: '15px' }}
          >
            Login with Facebook
          </Button>
          <Button
            onClick={() => oAuthLogin('google')}
            variant="contained"
            style={{ backgroundColor: '#fff', color: 'black', marginBottom: '15px' }}
          >
            Login with Google
          </Button>
          <Button
            onClick={() => oAuthLogin('line')}
            variant="contained"
            style={{ backgroundColor: '#00C300', color: 'white', marginBottom: '15px' }}
          >
            Login with Line
          </Button>
          <Button
            onClick={login}
            variant="contained"
            style={{ backgroundColor: 'black', color: 'white', marginBottom: '15px' }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
