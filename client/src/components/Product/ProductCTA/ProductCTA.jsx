import React from 'react';
import classes from './ProductCTA.module.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cart/cartAction.js';
import { addToFavorite } from '../../../store/index/indexAction';
import Cookie from 'js-cookie';
const ProductCTA = ({ product }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  const addToWishList = () => {
    const type = 'product';
    console.log('params', params);
    dispatch(addToFavorite(params.id, type));
  };
  return (
    <div className={classes.productCta}>
      <div className={classes.addToCart} onClick={() => addItemToCart()}>
        Add To Cart
      </div>
      <div onClick={() => addToWishList()} className={classes.wishlist}>
        {favoriteProducts.find((favoriteProduct) => favoriteProduct._id === product._id) ? (
          <div className={classes.wishListAdded}>Saved</div>
        ) : (
          <>
            <div>
              <FavoriteIcon />
              <span>Add to Wishlist</span>
              <ChevronRightIcon />
            </div>
            <p>Save for future shopping</p>
          </>
        )}
      </div>
    </div>
  );
};

ProductCTA.propTypes = {
  product: PropTypes.object,
};

export default ProductCTA;
