import PropTypes from 'prop-types';
import React from 'react';

import classes from './ResetPassword.module.scss';

const ResetPassword = ({ setLoginState }) => {
  return (
    <div className={classes.resetPasswordLayout}>
      <h2>重設密碼</h2>
      <p>請輸入你註冊時的 Email，我們會發送一封信件，點擊信件中的連結以重設密碼。</p>
      <p>找不到認證信時，請到「垃圾信件」分類查找，或在信箱搜尋「OHIO」。</p>
      <div className={classes.field}>
        <input className={classes.inputField} placeholder="Email" type="password" />
      </div>
      <button className={classes.signupButton}>送出</button>
      <button className={classes.prevPage} onClick={() => setLoginState('login')}>
        回上一頁
      </button>
    </div>
  );
};

ResetPassword.propTypes = {
  setLoginState: PropTypes.func,
};

export default ResetPassword;
