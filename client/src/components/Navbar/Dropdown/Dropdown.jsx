import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Dropdown.module.scss';
import { useDispatch } from 'react-redux';
import { setUserLogout } from '../../../store/user/userAction';
import { useHistory } from 'react-router-dom';
const Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    history.push('/');
    dispatch(setUserLogout());
  };
  return (
    <ul className={classes.userMenuTabs}>
      <li>
        <Link to={'/my/setting'}>帳戶設定</Link>
      </li>
      <li>
        <Link to={'/my/email'}>我的信箱</Link>
      </li>
      <li>
        <Link to={'/my/notification'}>通知中心</Link>
      </li>
      <li>
        <Link to={'/my/purchase/unpaid'}>購買訂單</Link>
      </li>
      <li onClick={() => logout()} className="logout">
        <a href="#">登出</a>
      </li>
    </ul>
  );
};

export default Dropdown;
