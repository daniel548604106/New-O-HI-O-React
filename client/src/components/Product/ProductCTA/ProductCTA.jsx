import React from 'react';
import classes from './ProductCTA.module.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cartAction.jsx';
const ProductCTA = ({ product }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className={classes.productCta}>
      <div className={classes.addToCart} onClick={() => addItemToCart()}>
        Add To Cart
      </div>
      <div className={classes.wishlist}>
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
