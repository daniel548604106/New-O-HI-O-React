import React, { useState } from 'react';
import classes from './Signup.module.scss';
import PropTypes from 'prop-types';
import { setUserLoggedIn } from '../../../store/user/userAction';
import { closeLoginModal } from '../../../store/index/indexAction';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import notify from '../../../lib/notification';
const SignUp = ({ setLoginState }) => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async () => {
    try {
      const { data } = await apiPost({ account, email, password });
      Cookie.set('me', data.user);
      Cookie.set('token', data.token);
      dispatch(closeLoginModal());
      dispatch(setUserLoggedIn(data));
      notify('登入成功！');
    } catch (error) {
      notify('登入失敗！請重新再試一次');
    }
  };
  return (
    <div className={classes.signupLayout}>
      <h2>註冊帳號</h2>
      <div className={classes.field}>
        <label htmlFor="account">帳號</label>
        <input
          onChange={(e) => setAccount(e.target.value)}
          name="password"
          className={classes.inputField}
          type="text"
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="account">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className={classes.inputField}
          type="email"
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="password">密碼</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className={classes.inputField}
          type="password"
        />
        <span>密碼需為 6 碼以上的英文或數字</span>
      </div>
      <p className={classes.policy}>
        按下註冊鈕的同時，表示您已詳閱我們的
        <span className={classes.highlight}>資料使用政策與使用條款</span>，同意使用 O-HI-O
        所提供的服務並訂閱電子報。
      </p>
      <div onClick={() => handleSignUp()} className={classes.signupButton}>
        註冊
      </div>
      <p className={classes.login}>
        已經有帳號了？ <span onClick={() => setLoginState('login')}>馬上登入</span>
      </p>
      <button className={classes.prevPage} onClick={() => setLoginState('welcome')}>
        回上一頁
      </button>
    </div>
  );
};

SignUp.propTypes = {
  setLoginState: PropTypes.func,
};

export default SignUp;
