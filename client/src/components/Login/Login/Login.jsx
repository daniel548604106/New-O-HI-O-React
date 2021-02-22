import React from 'react';
import classes from './Login.module.scss';
import PropTypes from 'prop-types';
const Login = ({ setLoginState }) => {
  return (
    <div>
      <div className={classes.signupLayout}>
        <h2>用 O-HI-O 帳號登入</h2>
        <div className={classes.field}>
          <label htmlFor="account">帳號</label>
          <input className={classes.inputField} type="text" />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">密碼</label>
          <input className={classes.inputField} type="password" />
        </div>
        <button className={classes.forgetPassword} onClick={() => setLoginState('resetPassword')}>
          忘記密碼
        </button>
        <button className={classes.signupButton}>註冊</button>
        <p className={classes.login}>
          還不是會員嗎？ <span onClick={() => setLoginState('signup')}>立刻註冊新帳號</span>
        </p>
        <button className={classes.prevPage} onClick={() => setLoginState('welcome')}>
          回上一頁
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLoginState: PropTypes.func,
};

export default Login;
