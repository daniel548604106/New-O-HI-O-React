import React, { useState } from 'react';
import classes from './Content.module.scss';
const Content = () => {
  const [selectedValue, setSelectedValue] = useState('popularity');
  return (
    <div>
      <div className={classes.topRow}>
        <p>找到 4023 件 商品</p>
        <div className={classes.sort}>
          <span>排序</span>
          <select value={selectedValue} name="sort" id="sort">
            <option value="popularity">最熱門選項</option>
            <option value="high-low">價格由高到低</option>
            <option value="low-high">價格由低到高</option>
            <option value="latest">最新上架</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Content;
