import React from 'react';
import classes from './RecommendedDesign.module.scss';
import PropTypes from 'prop-types';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
const RecommendedDesign = ({ pinnedProducts }) => {
  return (
    <>
      {pinnedProducts && pinnedProducts.length > 0 && (
        <div className={classes.recommendedDesign}>
          <h2 className={classes.title}>設計師主打設計</h2>
          <div className={classes.productRow}>
            {pinnedProducts &&
              pinnedProducts.map((product) => (
                <div className={classes.productImage} key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

RecommendedDesign.propTypes = {
  pinnedProducts: PropTypes.array,
};
export default RecommendedDesign;
