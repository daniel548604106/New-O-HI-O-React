import React from 'react';
import classes from './Card.module.scss';
const Card = () => {
  const items = [
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/sellables_original.jpg',
      title: '原創商品',
      valid: '由設計師本人（或團隊）親自發想、設計，且符合  O.HI.O 商品販售政策。',
      invalid: '使用工廠大量製造的公版成品再貼標而產出的商品。',
    },
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/sellables_authorized.jpg',
      title: '授權販售商品',
      valid: '得到原廠品牌或商品原創者書面授權或擁有其他合法權源。',
      invalid: '至各地少量帶貨、批貨而來之商品。',
    },
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/sellables_vintage.jpg',
      title: '十年老件',
      valid: '歷經十年以上時間淬練，狀況良好且數量有限的古董或物品。',
      invalid: '仿舊物品、不滿足以上定義的二手舊物',
    },
    {
      img: 'https://cdn04.pinkoi.com/pinkoi.site/event/store-intro/sellables_original.jpg',
      title: '體驗活動',
      valid: '獨特且具備好品質的體驗活動，帶領消費者探索品牌價值或在地文化，留下珍貴的回憶。',
      invalid: '違反 O.HI.O 商品販售政策之體驗活動。',
    },
  ];
  return (
    <div className={classes.cardsLayout}>
      {items.map((item) => (
        <div key={item.title}>
          <h3 className={classes.title}>{item.title}</h3>
          <img src={item.img} alt={item.title} />
          <p>{item.valid}</p>
          <p>{item.invalid}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
