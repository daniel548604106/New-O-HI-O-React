import React from 'react';
import classes from './Sidebar.module.scss';
const Sidebar = () => {
  return (
    <div className={classes.sideBar}>
      <h2 className={classes.title}>商品分類</h2>
      <ul className={classes.categories}>
        <li>
          配件飾品 <span>(14)</span>
        </li>
        <li>文具卡片</li>
        <li>居家生活</li>
      </ul>
      <h2 className={classes.title}>商品標籤</h2>
      <ul className={classes.tags}>
        <li>
          生日禮物 <span>(14)</span>
        </li>
        <li>週年紀念</li>
        <li>情人節禮物</li>
      </ul>
    </div>
  );
};

export default Sidebar;
