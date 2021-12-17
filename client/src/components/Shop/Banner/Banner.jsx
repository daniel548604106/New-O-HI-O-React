import PropTypes from 'prop-types';
import React from 'react';

import classes from './Banner.module.scss';
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
