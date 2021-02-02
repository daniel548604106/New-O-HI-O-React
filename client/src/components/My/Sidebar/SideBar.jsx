import React from 'react';
import classes from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className={classes.mySidebarLayout}>
      <ul>
        <li>
          <Link to={`/my/setting`}>帳號設定</Link>
        </li>
        <li>
          <Link to={`/my/purchase/unpaid`}>購買訂單</Link>
        </li>
        <li>退款申請</li>
        <li>我的信箱</li>
      </ul>
    </div>
  );
};

export default SideBar;
