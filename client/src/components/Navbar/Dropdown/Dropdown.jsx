import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Dropdown.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogout } from '../../../store/user/userAction';

const Dropdown = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setUserLogout());
  };
  return (
    <div>
      <div className={classes.dropdownLayout}>
        <ul className={classes.userMenuTabs}>
          <li>
            <Link to={'/my'}>{user.name}</Link>
          </li>
          <li>
            <Link to={'/my/email'}>我的信箱</Link>
          </li>
          <li>
            <Link to={'/my/notification'}>通知中心</Link>
          </li>
          <li>
            <Link to={'/my/purchase'}>購買訂單</Link>
          </li>
          <li>
            <Link to={'/my/setting'}>帳戶設定</Link>
          </li>
          <li onClick={() => logout()} className="logout">
            登出
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
