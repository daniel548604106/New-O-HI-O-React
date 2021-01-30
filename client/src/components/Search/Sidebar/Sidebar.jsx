import React from 'react';
import classes from './Sidebar.module.scss';
import Price from './Price/Price.jsx';
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <p className={classes.title}>你可能也想找</p>
      <div className={classes.price}>
        <Price />
      </div>
    </div>
  );
};

export default Sidebar;
