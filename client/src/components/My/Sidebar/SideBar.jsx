import React, { useEffect } from 'react';
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
      name: '退款申請',
      route: '/my/refund/processing',
    },
    {
      name: '我的信箱',
      route: '/my/mail',
    },
  ];
  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <div className={classes.mySidebarLayout}>
      <ul>
        {mySettingOptions.map((option) => (
          <li key={option.name}>
            <Link
              to={option.route}
              className={location.pathname.includes(option.route) && classes.active}
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
