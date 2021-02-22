import React from 'react';
import classes from './Login.module.scss';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { closeLoginModal } from '../../store/index/indexAction';
import { redirectUri, config } from '../../lib/oAuth';
import qs from 'query-string';
import SocialLogin from './SocialLogin/SocialLogin.jsx';
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
    <div style={{ maxWidth: '80vw', width: '600px', display: 'block', height: '100%' }}>
      <div style={{ display: 'flex ', flexDirection: 'column', position: 'relative' }}>
        <div className={classes.welcomeBanner}>
          <div className={classes.welcome}>
            <p className={classes.sectionTitle}>
              現在加入會員 <br />
              立即享有專屬優惠！
            </p>
          </div>
        </div>
        <div className={classes.loginModalLayout}>
          <p className={classes.sectionTitle}>用以下帳號繼續</p>
          <SocialLogin />
          <div className={classes.divider}>
            <p>或使用 O.HI.O 帳號</p>
          </div>
          <div className={classes.btnRow}>
            <button className={classes.loginBtn} onClick={login}>
              登入
            </button>
            <button className={classes.loginBtn} onClick={login}>
              註冊
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
