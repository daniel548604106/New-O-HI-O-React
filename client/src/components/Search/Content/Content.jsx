import React, { useState, useEffect } from 'react';
import classes from './Content.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button.jsx';
import { useHistory } from 'react-router-dom';
const Content = ({ searchedProducts, searchInput }) => {
  const history = useHistory();
  const [selectedValue, setSelectedValue] = useState('popularity');
  const directTo = (page) => {
    history.push(page);
  };
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
    <>
      {searchedProducts.length > 0 ? (
        <div>
          <div className={classes.topRow}>
            <p>找到 {searchedProducts.length} 件 商品</p>
          </div>
          <div className={classes.searched}>
            {searchedProducts.map((product) => (
              <div key={product._id} className={classes.products}>
                <ProductCard product={product} observer={imageObserver} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.notFound}>
          <p className={classes.noResult}>
            找不到與 <span>{searchInput}</span> 有關的結果
          </p>
          <pre>{searchedProducts}</pre>

          <div onClick={() => history.goBack()}>
            <Button text="返回上一頁" />
          </div>
          <p className={classes.alternatives}>
            你也可以: <span onClick={() => directTo('browse')}>直接逛設計</span>
            <span onClick={() => directTo('wall')}>找更多靈感</span>
          </p>
          <div onClick={() => directTo('giftguides')} className={classes.adImage}></div>
        </div>
      )}
    </>
  );
};

Content.propTypes = {
  searchedProducts: PropTypes.array,
  searchInput: PropTypes.string,
};

export default Content;
