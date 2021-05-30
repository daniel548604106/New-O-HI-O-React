import React from 'react';
import classes from './CartSummary.module.scss';
import PropTypes from 'prop-types';
const CartSummary = ({ proceedToCheckout, subTotalPrice, totalPrice }) => {
  return (
    <div>
      <div className={classes.totalHeader}>訂單摘要</div>
      <div className={classes.totalBody}>
        <div className={classes.totalBodyContent}>
          <span>商品總計</span>
          <span className={classes.price}>NTD {subTotalPrice}</span>
        </div>
        <div className={classes.totalBodyContent}>
          <span>其他折抵</span>
          <span className={classes.price}>0</span>
        </div>
        <div className={classes.totalBodyContent}>
          <span>首購優惠</span>
        </div>
        <hr />
        <div className={classes.totalPriceContent}>
          <span className={classes.totalPriceTitle}>總結帳金額:</span>
          <span className={classes.totalPrice}>NTD {totalPrice}</span>
        </div>
        <div onClick={() => proceedToCheckout()} className={classes.checkoutButton}>
          前往結帳
        </div>
      </div>
    </div>
  );
};

CartSummary.propTypes = {
  proceedToCheckout: PropTypes.func,
  subTotalPrice: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default CartSummary;
