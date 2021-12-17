import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ShoppingList.module.scss';
const OrderList = ({ checkoutList }) => {
  const total = useSelector((state) => state.checkout.total);
  return (
    <div>
      <div className={classes.orderList}>
        <span className={classes.title}>購物明細</span>
      </div>
      {checkoutList.map((list, idx) => (
        <div key={list._id} className={classes.productCard}>
          <p className={classes.productName}>
            <span className={classes.number}>{idx + 1}. </span>
            {list.name}
          </p>
          <div className={classes.productInfo}>
            <li>單價： ${list.discountPrice || list.fullPrice}</li>
            <li>數量： {list.quantity}</li>
            <li>
              庫存狀態: <span className={classes.stockStatus}>無 (下單馬上進貨）</span>
            </li>
            <li>
              商品總額：
              <span className={classes.productSubtotal}>
                $ {list.quantity * (list.discountPrice || list.fullPrice)}
              </span>
            </li>
          </div>
        </div>
      ))}
      <div className={classes.totalPriceRow}>
        <p>訂單總額</p>
        <p className={classes.totalPrice}>
          NT$ <span>{total}</span>元
        </p>
      </div>
    </div>
  );
};

OrderList.propTypes = {
  checkoutList: PropTypes.array,
};

export default OrderList;
