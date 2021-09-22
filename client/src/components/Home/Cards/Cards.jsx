import React, { useState, useEffect } from 'react';
import classes from './Cards.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import ProductCardLoading from '../../Global/SkeletonLoading/ProductCardLoading.jsx';
import { Link } from 'react-router-dom';
const Cards = ({ products, title, t, link, id, showMore }) => {
  //Lazy Load Image using Intersection Observer API
  const [imageObserver, setImageObserver] = useState(null);
  const createObserver = (inViewCallback = noop, newOptions = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: '30px',
      threshold: 0,
    };
    return new IntersectionObserver(inViewCallback, { ...defaultOptions, newOptions });
  };
  const onImageInView = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const imageSrc = element.getAttribute('data-src');

        element.removeAttribute('data-src');
        element.setAttribute('src', imageSrc);

        observer.unobserve(element);
      }
    });
  };

  useEffect(() => {
    const imageObserver = createObserver(onImageInView);
    setImageObserver(imageObserver);

    return () => {
      imageObserver.disconnect();
    };
  }, []);
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
              <ProductCard id={id} observer={imageObserver} product={product} />
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
  id: PropTypes.string,
  showMore: PropTypes.bool,
};

Cards.defaultProps = {
  showMore: true,
};

export default Cards;
