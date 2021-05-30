import React from 'react';

import classes from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.binding}></div>
      <div className={classes.pad}>
        <div className={`${classes.line} ${classes.line1}`}></div>
        <div className={`${classes.line} ${classes.line2}`}></div>
        <div className={`${classes.line} ${classes.line3}`}></div>
      </div>
      <div className={classes.text}>O.HI.O is loading...</div>
    </div>
  );
};

export default Loader;
