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
    <>
      <Skeleton height={300} width={300} />
      <Skeleton height={50} width={100} style={{ marginTop: '20px', display: 'block' }} />
      <Skeleton height={50} width={200} style={{ marginTop: '20px' }} />
    </>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};
export default ProductDisplay;
