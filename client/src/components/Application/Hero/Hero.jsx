import React from 'react';

import classes from './Hero.module.scss';
const Hero = () => {
  return (
    <div className={classes.heroLayout}>
      <h1>
        Build Your Online Business with <br />
        O.HI.O
      </h1>
      <h2>亞洲領先設計購物網站 設計品牌銷售首選平台</h2>
      <button className={classes.apply}>立即申請開館</button>
    </div>
  );
};

export default Hero;
