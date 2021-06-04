import React, { useState, useEffect } from 'react';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import classes from './ProductRecommendation.module.scss';
import PropTypes from 'prop-types';
const ProductRecommendation = ({ products }) => {
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
    <div>
      <h2 className={classes.title}>為你推薦的好設計</h2>
      <div className={classes.recommendationLayout}>
        {products.map((product) => (
          <div key={product._id} className={classes.productsLayout}>
            <ProductCard product={product} observer={imageObserver} />
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
