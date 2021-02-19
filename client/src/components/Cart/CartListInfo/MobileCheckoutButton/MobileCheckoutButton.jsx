import React from 'react';
import classes from './MobileCheckoutButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckoutProgress } from '../../../../store/cart/cartAction';
import { useHistory } from 'react-router-dom';
const MobileCheckoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce((total, item) => {
    return (total += (item.discountPrice || item.fullPrice) * item.quantity);
  }, 0);
  const proceedToCheckout = () => {
    dispatch(updateCheckoutProgress(2));
    history.push('/cart/payment');
  };

  return (
    <div className={classes.checkoutButtonLayout}>
      <div className={classes.priceInfoContainer}>
        <div className={classes.discountPriceContainer}>
          <h2>折扣金額:</h2>
          <span>-$ 720</span>
        </div>
        <div className={classes.totalPriceContainer}>
          <h2>總結帳金額:</h2>
          <span>$ 720</span>
        </div>
      </div>
      <button onClick={() => proceedToCheckout()} className={classes.checkoutButton}>
        前往結帳
      </button>
    </div>
  );
};

export default MobileCheckoutButton;
