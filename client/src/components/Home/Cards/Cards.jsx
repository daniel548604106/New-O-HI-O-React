import React from 'react';
import classes from './Cards.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'react';
import Skeleton from 'react-loading-skeleton';
import ProductCardLoading from '../../Global/SkeletonLoading/ProductCardLoading.jsx';
import { Link } from 'react-router-dom';
const Cards = ({ products, title, t, link, showMore }) => {
  return (
    <div className={classes.cardSection}>
      <div className={classes.titleRow}>
        <h2 className={classes.title}>{t(title)}</h2>
        {showMore && (
          <Link to={link} className={classes.seeMore}>
            {t('seeMore')}
          </Link>
        )}
      </div>
      {products.length ? (
        <div className={classes.cardRow}>
          {products.map((product) => (
            <div key={product._id} className={classes.cards}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <ProductCardLoading />
      )}
    </div>
  );
};

Cards.propTypes = {
  products: PropTypes.array,
  t: PropTypes.func,
  title: PropTypes.string,
  link: PropTypes.string,
  showMore: PropTypes.bool,
};

Cards.defaultProps = {
  showMore: true,
};

export default Cards;
