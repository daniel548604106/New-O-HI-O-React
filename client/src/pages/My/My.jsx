import React from 'react';
import classes from './My.module.scss';
import Sidebar from '../../components/My/Sidebar/SideBar.jsx';
import Content from '../../components/My/Content/Content.jsx';
const My = () => {
  return (
    <div className={classes.myLayout}>
      <div className={classes.mySidebar}>
        <h2>我的 O-HI-O</h2>
        <Sidebar />
      </div>
      <div className={classes.myContent}>
        <Content />
      </div>
    </div>
  );
};

export default My;
