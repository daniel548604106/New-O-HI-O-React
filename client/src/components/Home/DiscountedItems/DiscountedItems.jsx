import React from 'react';
import classes from './DiscountedItems.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'react';

const DiscountedItems = ({ products, t }) => {
  return (
    <div>
      <div className={classes.titleRow}>
        <h2 className={classes.title}>{t('discountedItems')}</h2>
        <span className={classes.seeMore}>{t('seeMore')}</span>
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
  t: PropTypes.func,
};

export default DiscountedItems;
