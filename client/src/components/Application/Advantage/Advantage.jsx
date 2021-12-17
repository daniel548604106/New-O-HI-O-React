import React from 'react';

import classes from './Advantage.module.scss';
const Advantage = () => {
  const items = [
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/why_3.svg',
      title: '商品退貨率',
      highLight: '低於 3%',
      text: '核心客群黏著度高，對設計品牌具有極高認同度和忠誠度',
    },
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/why_5.svg',
      title: '跨境訂單佔比',
      highLight: '30%+',
      text: '販售至全球 10 個國家，跨境銷售環境成熟，助品牌快速佈局國際市場',
    },
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/why_6.svg',
      title: '深入亞洲',
      highLight: '5 大市場',
      text: '專業團隊深耕台灣、港澳、中國大陸、日本、泰國市場',
    },
  ];
  return (
    <div className={classes.titleLayout}>
      <h2>為什麼要在 O.HI.O 開設計館？</h2>
      <p>
        O.HI.O
        是亞洲領先的設計購物網站，致力為各規模的品牌提供可持續發展的平台，讓創作人在這裡安心建立品牌價值，成長為國際級的設計品牌，共同打造一個讓生活更美好的設計生態圈。
      </p>

      <div data-aos="zoom-in-down" className={classes.cardLayout}>
        {items.map((item) => (
          <div key={item.title}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <h1>{item.highLight}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
