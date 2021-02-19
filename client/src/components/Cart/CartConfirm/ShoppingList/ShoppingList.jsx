import React from 'react';
import classes from './ShoppingList.module.scss';
const OrderList = () => {
  return (
    <div>
      <div className={classes.orderList}>
        <span className={classes.title}>購物明細</span>
      </div>
      <div className={classes.productCard}>
        <p className={classes.productName}>
          <span className={classes.number}>1. </span>嗨你好這是測試
        </p>
        <div className={classes.productInfo}>
          <li>單價： $300</li>
          <li>數量： 1</li>
          <li>
            庫存狀態: <span className={classes.stockStatus}>無 (下單馬上進貨）</span>
          </li>
          <li>
            商品總額：<span className={classes.productSubtotal}> $300</span>
          </li>
        </div>
      </div>
      <div className={classes.totalPriceRow}>
        <p>訂單總額</p>
        <p className={classes.totalPrice}>
          NT$ <span>1652</span>元
        </p>
      </div>
    </div>
  );
};

export default OrderList;
