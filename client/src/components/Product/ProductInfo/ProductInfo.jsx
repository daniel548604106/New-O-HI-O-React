import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductInfo.module.scss';
import Skeleton from 'react-loading-skeleton';
import { discount } from '../../../lib/tools';

const ProductInfo = ({ product, t }) => {
  return (
    product && (
      <div className={classes.rootInfo}>
        <>
          {product ? (
            <p className={classes.brandName}>{product.publishedBy.name}</p>
          ) : (
            <Skeleton height={50} width={150} />
          )}
          {product ? (
            <h1 className={classes.productName}>{product.name}</h1>
          ) : (
            <Skeleton height={100} />
          )}
          <div className={classes.priceRow}>
            <div className={classes.price}>
              {product.discountPrice && (
                <div className={classes.discountPrice}>${product.discountPrice}</div>
              )}
              <div className={product.discountPrice ? classes.originalPrice : classes.fullPrice}>
                ${product.fullPrice}
              </div>
            </div>
            <div className={classes.brandOrigin}>
              <p>
                From:
                <a href={product.publishedBy.website} target="_blank" rel="noreferrer">
                  {product && (product.publishedBy.website || product.publishedBy.name)}
                </a>
              </p>
            </div>
          </div>
          <div className={classes.tags}>
            {product.discountPrice && (
              <div className={classes.discount}>
                <span className={classes.discountPercentage}>{discount(product)}</span>
                <span className={classes.amountSaved}>
                  省下 ${product.fullPrice - product.discountPrice}
                </span>
              </div>
            )}
          </div>

          <hr className={classes.hr} />
        </>
      </div>
    )
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
  t: PropTypes.func,
};
export default ProductInfo;
