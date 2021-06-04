import React from 'react';
import classes from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const mySettingOptions = [
    {
      name: '帳號設定',
      route: '/my/setting',
    },
    {
      name: '購買訂單',
      route: '/my/purchase/unpaid',
    },
    {
      name: '通知中心',
      route: '/my/notification',
    },
    {
      name: '我的信箱',
      route: '/my/mail',
    },
  ];

  return (
    <div className={classes.mySidebarLayout}>
      <ul>
        {mySettingOptions.map((option) => (
          <li key={option.name}>
            <Link
              to={option.route}
              className={location.pathname.includes(option.route) ? classes.active : ''}
            >
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
