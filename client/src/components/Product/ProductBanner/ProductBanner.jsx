import React, { useState } from 'react';
import classes from './ProductBanner.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../store/cart/cartAction.js';
import { addToFavorite, openLoginModal } from '../../../store/index/indexAction';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
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
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const params = useParams();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const scrollEffect = (idx) => {
    setActiveBtn(idx);
    scrollToPage(idx);
  };

  const addToWishList = () => {
    if (!isUserLoggedIn) {
      dispatch(openLoginModal());
    }
    const type = 'product';
    dispatch(addToFavorite(params.id, type));
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
          <button
            onClick={() => addToWishList()}
            className={`${
              favoriteProducts.find((favoriteProduct) => favoriteProduct._id === product._id) &&
              classes.wishListAdded
            } ${classes.ctaBtn} ${classes.addToFavoriteBtn}`}
          >
            {favoriteProducts &&
            favoriteProducts.find((favoriteProduct) => favoriteProduct._id === product._id) ? (
              <div className={classes.addedBtnLayout}>
                <FavoriteBorderIcon />
              </div>
            ) : (
              <div className={classes.btnLayout}>
                <FavoriteBorderIcon />
              </div>
            )}
          </button>
          <button className={classes.btnCartLayout} onClick={() => addItemToCart(product)}>
            <AddShoppingCartIcon />
            <p>放入購物車</p>
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
