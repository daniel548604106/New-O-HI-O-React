import React from 'react';
import classes from './ProductCTA.module.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiAddToFavorite } from '../../../api/index';
import { addToCart } from '../../../store/cart/cartAction.js';
import Cookie from 'js-cookie';
const ProductCTA = ({ product }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  const addToWishList = () => {
    const { data } = apiAddToFavorite(params.id);
    console.log(data);
  };
  return (
    <div className={classes.productCta}>
      <div className={classes.addToCart} onClick={() => addItemToCart()}>
        Add To Cart
      </div>
      <div onClick={() => addToWishList()} className={classes.wishlist}>
        <div>
          <FavoriteIcon />
          <span>Add to Wishlist</span>
          <ChevronRightIcon />
        </div>
        <p>Save for future shopping</p>
      </div>
    </div>
  );
};

ProductCTA.propTypes = {
  product: PropTypes.object,
};

export default ProductCTA;
