import React from 'react';
import classes from './NewItems.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'react';

const NewItems = ({ products, t, i18n }) => {
  return (
    <div>
      <div className={classes.titleRow}>
        <h2 className={classes.title}>{t('newRelease')}</h2>
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

NewItems.propTypes = {
  products: PropTypes.Array,
  t: PropTypes.func,
  i18n: PropTypes.func,
};

export default NewItems;
