import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductDisplay.module.scss';
import Skeleton from 'react-loading-skeleton';

const ProductDisplay = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  return product ? (
    <div className={classes.rootContainer}>
      <div
        className={classes.displayImage}
        style={{ backgroundImage: `url(${product.images[activeImage]})` }}
      ></div>
      <div className={classes.controlImage}>
        {product.images.map((image, idx) => (
          <img key={image} src={image} onClick={() => setActiveImage(idx)} alt="" />
        ))}
      </div>
    </div>
  ) : (
    <Skeleton height={100} />
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};
export default ProductDisplay;
