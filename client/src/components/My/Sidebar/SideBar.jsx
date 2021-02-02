import React from 'react';
import classes from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className={classes.mySidebarLayout}>
      <ul>
        <li>
          <Link to={`/my/setting`}>帳號設定</Link>
          <div className={classes.options}>
            <Link to={`my/setting`}>General Setting</Link>
            <Link to={`my/setting?p=about`}>About Me</Link>
          </div>
        </li>
        <li>
          <Link to={`/my/purchase/unpaid`}>購買訂單</Link>
        </li>
        <li>
          <Link to={`/my/refund/processing`}>退款申請</Link>
        </li>
        <li>我的信箱</li>
      </ul>
    </div>
  );
};

export default SideBar;
