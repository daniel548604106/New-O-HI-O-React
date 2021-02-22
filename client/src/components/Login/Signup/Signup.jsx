import React from 'react';
import classes from './Signup.module.scss';
import PropTypes from 'prop-types';

const Signup = ({ setLoginState }) => {
  return (
    <div className={classes.signupLayout}>
      <h2>註冊帳號</h2>
      <div className={classes.field}>
        <label htmlFor="account">帳號</label>
        <input className={classes.inputField} type="text" />
        <span>帳號只能是英文和數字</span>
      </div>
      <div className={classes.field}>
        <label htmlFor="password">密碼</label>
        <input className={classes.inputField} type="password" />
        <span>密碼需為 6 碼以上的英文或數字</span>
      </div>
      <div className={classes.field}>
        <label htmlFor="account">Email</label>
        <input className={classes.inputField} type="email" />
      </div>
      <p className={classes.policy}>
        按下註冊鈕的同時，表示您已詳閱我們的
        <span className={classes.highlight}>資料使用政策與使用條款</span>，同意使用 O-HI-O
        所提供的服務並訂閱電子報。
      </p>
      <button className={classes.signupButton}>註冊</button>
      <p className={classes.login}>
        已經有帳號了？ <span onClick={() => setLoginState('login')}>馬上登入</span>
      </p>
      <button className={classes.prevPage} onClick={() => setLoginState('welcome')}>
        回上一頁
      </button>
    </div>
  );
};

Signup.propTypes = {
  setLoginState: PropTypes.func,
};

export default Signup;
