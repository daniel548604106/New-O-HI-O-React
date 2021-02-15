import React from 'react';
import classes from './Cards.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'react';

const Cards = ({ products, title, t }) => {
  return (
    <div className={classes.cardSection}>
      <div className={classes.titleRow}>
        <h2 className={classes.title}>{t(title)}</h2>
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

Cards.propTypes = {
  products: PropTypes.Array,
  t: PropTypes.func,
  title: PropTypes.string,
};

export default Cards;
