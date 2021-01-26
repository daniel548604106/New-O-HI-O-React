import React from 'react';
import classes from './DiscountedItems.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'react';

const DiscountedItems = ({ products }) => {
  return (
    <div>
      <div className={classes.titleRow}>
        <h2 className={classes.title}>Discounted Items</h2>
        <span className={classes.seeMore}>See More</span>
      </div>
      <div className={classes.cardRow}>
        {products.map((product) => (
          <div key={product._id} className={classes.cards}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

DiscountedItems.propTypes = {
  products: PropTypes.Array,
};

export default DiscountedItems;
