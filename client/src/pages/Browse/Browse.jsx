import React from 'react';
import SideBar from '../../components/Browse/SideBar/SideBar.jsx';
import MainContent from '../../components/Browse/MainContent/MainContent.jsx';
import classes from './Browse.module.scss';
const Browse = () => {
  return (
    <div className={classes.browseLayout}>
      <div className={classes.sideBar}>
        <SideBar />
      </div>
      <div className={classes.mainContent}>
        <MainContent />
      </div>
    </div>
  );
};

export default Browse;
