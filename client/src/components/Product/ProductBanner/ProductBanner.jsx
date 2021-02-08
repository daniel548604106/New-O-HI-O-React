import React, { useState, useRef } from 'react';
import classes from './ProductBanner.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { apiAddToFavorite } from '../../../api/index';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../store/cart/cartAction.js';
const ProductBanner = ({ product, scrollToPage }) => {
  const scrollBtns = [
    {
      name: 'Product Description',
      scrollTo: 'product-description',
    },
    {
      name: 'Evaluation & Comments',
      scrollTo: 'evaluation-&-comments',
    },
  ];
  const [activeBtn, setActiveBtn] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const scrollEffect = (idx) => {
    setActiveBtn(idx);
    scrollToPage(idx);
  };

  const addToWishList = () => {
    const type = 'product';
    const { data } = apiAddToFavorite(params.id, type);
    console.log(data);
  };

  return (
    <div className={classes.bannerRoot}>
      <div className={classes.bannerLayout}>
        <div className={classes.scrollBtnRow}>
          {scrollBtns.map((scrollBtn, idx) => (
            <div key={scrollBtn.name}>
              <a onClick={() => scrollEffect(idx)} className={activeBtn === idx && classes.active}>
                {scrollBtn.name}
              </a>
            </div>
          ))}
        </div>
        <div className={classes.ctaBtnRow}>
          <button onClick={() => addToWishList()} className={classes.wishList}>
            <FavoriteBorderIcon />
            <p>Add To WishList</p>
          </button>
          <button onClick={() => addItemToCart(product)} className={classes.addToCart}>
            <p>Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductBanner.propTypes = {
  product: PropTypes.object,
  scrollToPage: PropTypes.func,
};

export default ProductBanner;
