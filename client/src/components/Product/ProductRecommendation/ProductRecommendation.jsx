import React from 'react';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import classes from './ProductRecommendation.module.scss';
import PropTypes from 'prop-types';
const ProductRecommendation = ({ products }) => {
  return (
    <div>
      <h2 className={classes.title}>為你推薦的好設計</h2>
      <div className={classes.recommendationLayout}>
        {products.map((product) => (
          <div key={product._id} className={classes.productsLayout}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

ProductRecommendation.propTypes = {
  products: PropTypes.array,
};

export default ProductRecommendation;
