import React from 'react';
import classes from './Banner.module.scss';
import PropTypes from 'prop-types';
const Banner = ({ shop }) => {
  return (
    <div
      className={classes.shopBanner}
      style={{ backgroundImage: shop && `url(${shop.banner})` }}
    ></div>
  );
};

Banner.propTypes = {
  shop: PropTypes.object,
};

export default Banner;
