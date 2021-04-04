import React from 'react';

import classes from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={classes.loader}>
      <div style={{ display: 'flex' }}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
      <p style={{ marginTop: '10px' }}>Loading</p>
    </div>
  );
};

export default Loader;
