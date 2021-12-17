import React from 'react';
import { useSelector } from 'react-redux';

import classes from './CartProgressBar.module.scss';
const CartProgressBar = () => {
  const progress = useSelector((state) => state.cart.checkoutProgress);
  return (
    <div className={classes.progressBar}>
      <div className={`${classes.dot} ${progress >= 1 && classes.active}`}>
        1
        <span className={`${classes.progressTitle}  ${progress >= 1 && classes.activeTitle}`}>
          購物明細
        </span>
      </div>
      <div className={`${classes.line} ${progress >= 2 && classes.active}`}></div>
      <div className={`${classes.dot}  ${progress >= 2 && classes.active}`}>
        2{' '}
        <span className={`${classes.progressTitle}  ${progress >= 2 && classes.activeTitle}`}>
          付款方式
        </span>
      </div>
      <div className={`${classes.line}  ${progress >= 3 && classes.active}`}></div>
      <div className={`${classes.dot}  ${progress >= 3 && classes.active}`}>
        3
        <span className={`${classes.progressTitle}  ${progress >= 3 && classes.activeTitle}`}>
          最後確認
        </span>
      </div>
    </div>
  );
};

export default CartProgressBar;
