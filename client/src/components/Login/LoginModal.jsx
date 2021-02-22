import React, { useState } from 'react';
import classes from './LoginModal.module.scss';
import { useDispatch } from 'react-redux';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login.jsx';
import ResetPassword from './ResetPassword/ResetPassword.jsx';
import { redirectUri, config } from '../../lib/oAuth';
import qs from 'query-string';
import CloseIcon from '@material-ui/icons/Close';
import { closeLoginModal } from '../../store/index/indexAction';
import SocialLogin from './SocialLogin/SocialLogin.jsx';
const LoginModal = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState('welcome');

  const handleCloseLoginModal = () => {
    dispatch(closeLoginModal());
  };

  return (
    <div className={classes.modalLayout}>
      <div onClick={() => handleCloseLoginModal()} className={classes.closeBtn}>
        <CloseIcon />
      </div>
      <div>
        {loginState === 'resetPassword' && <ResetPassword setLoginState={setLoginState} />}
        {loginState === 'signup' && <Signup setLoginState={setLoginState} />}
        {loginState === 'login' && <Login setLoginState={setLoginState} />}
      </div>
      {loginState === 'welcome' && (
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
              <button onClick={() => setLoginState('login')} className={classes.loginBtn}>
                登入
              </button>
              <button onClick={() => setLoginState('signup')} className={classes.loginBtn}>
                註冊
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
