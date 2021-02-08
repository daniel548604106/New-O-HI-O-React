import React from 'react';
import classes from './My.module.scss';
import Sidebar from '../../components/My/Sidebar/SideBar.jsx';
import Setting from './Setting/Setting.jsx';
import Purchase from '../../components/My/Content/Purchase/Purchase.jsx';
import Refund from '../../components/My/Content/Refund/Refund.jsx';
import { useLocation } from 'react-router-dom';
const My = () => {
  return (
    <div className={classes.myLayout}>
      <div className={classes.mySidebar}>
        <h2>我的 O-HI-O</h2>
        <Sidebar />
      </div>
      <div className={classes.myContent}>
        {location.pathname.includes('setting') && <Setting />}
        {location.pathname.includes('purchase') && <Purchase />}
        {location.pathname.includes('refund') && <Refund />}
      </div>
    </div>
  );
};

export default My;
