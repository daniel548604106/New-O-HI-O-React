import React, { useState, useRef } from 'react';
import classes from './ProductBanner.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../store/cart/cartAction.js';
import { addToFavorite } from '../../../store/index/indexAction';
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
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const scrollEffect = (idx) => {
    setActiveBtn(idx);
    scrollToPage(idx);
  };

  const addToWishList = () => {
    const type = 'product';
    console.log('params', params);
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
          <button onClick={() => addToWishList()}>
            {favoriteProducts &&
            favoriteProducts.find((favoriteProduct) => favoriteProduct._id === product._id) ? (
              <div className={classes.wishListAdded}>
                <FavoriteBorderIcon />
                <p>Added</p>
              </div>
            ) : (
              <div className={classes.wishList}>
                <FavoriteBorderIcon />
                <p>Add To WishList</p>
              </div>
            )}
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
