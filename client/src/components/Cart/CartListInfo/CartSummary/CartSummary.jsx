import React from 'react';
import classes from './CartSummary.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckoutProgress } from '../../../../store/cart/cartAction';
import { useHistory } from 'react-router-dom';
const CartSummary = () => {
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
    <div>
      <div className={classes.totalHeader}>訂單摘要</div>
      <div className={classes.totalBody}>
        <div className={classes.totalBodyContent}>
          <span>商品總計</span>
          <span className={classes.price}>NTD {subtotal}</span>
        </div>
        <div className={classes.totalBodyContent}>
          <span>其他折抵</span>
          <span className={classes.price}>-NTD 144</span>
        </div>
        <div className={classes.totalBodyContent}>
          <span>首購優惠</span>
        </div>
        <hr />
        <div className={classes.totalPriceContent}>
          <span className={classes.totalPriceTitle}>總結帳金額:</span>
          <span className={classes.totalPrice}>NTD 4000</span>
        </div>
        <div onClick={() => proceedToCheckout()} className={classes.checkoutButton}>
          前往結帳
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
