import React from 'react';
import classes from './MobileCheckoutButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckoutProgress } from '../../../../store/cart/cartAction';
import PropTypes from 'prop-types';
const MobileCheckoutButton = ({ proceedToCheckout, totalPrice }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce((total, item) => {
    return (total += (item.discountPrice || item.fullPrice) * item.quantity);
  }, 0);

  return (
    <div className={classes.checkoutButtonLayout}>
      <div className={classes.priceInfoContainer}>
        <div className={classes.discountPriceContainer}>
          <h2>折扣金額:</h2>
          <span>-$ 720</span>
        </div>
        <div className={classes.totalPriceContainer}>
          <h2>總結帳金額:</h2>
          <span>$ {totalPrice}</span>
        </div>
      </div>
      <button onClick={() => proceedToCheckout()} className={classes.checkoutButton}>
        前往結帳
      </button>
    </div>
  );
};

MobileCheckoutButton.propTypes = {
  proceedToCheckout: PropTypes.func,
  totalPrice: PropTypes.number,
};

export default MobileCheckoutButton;
