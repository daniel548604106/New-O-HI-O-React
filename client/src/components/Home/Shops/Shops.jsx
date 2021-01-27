import React from 'react';
import ShopCard from '../../Global/ShopCard/ShopCard.jsx';
import classes from './Shops.module.scss';
import PropTypes from 'prop-types';
const Shops = ({ t }) => {
  const shops = [
    {
      name: 'Kenzo',
      followers: 35,
      _id: 3,
    },
    {
      name: 'Bezonia',
      followers: 0,
      _id: 33,
    },
    {
      name: 'American Eagle',
      followers: 200,
      _id: 123,
    },
    {
      name: 'Samsonite',
      followers: 123,
      _id: 1,
    },
  ];
  return (
    <div className={classes.shopCardLayout}>
      <h2 className={classes.title}>{t('hotShop')}</h2>
      <div className={classes.shops}>
        {shops.map((shop) => (
          <div key={shop._id} className={classes.shop}>
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>
    </div>
  );
};

Shops.propTypes = {
  t: PropTypes.func,
};

export default Shops;
