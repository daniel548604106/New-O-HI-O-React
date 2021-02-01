import React from 'react';
import ShopCard from '../../Global/ShopCard/ShopCard.jsx';
import classes from './Shops.module.scss';
import PropTypes from 'prop-types';
const Shops = ({ t, shops }) => {
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
  shops: PropTypes.array,
};

export default Shops;
