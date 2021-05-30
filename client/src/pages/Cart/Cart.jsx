import React from 'react';
import classes from './Cart.module.scss';
import CartProgressBar from '../../components/Cart/CartProgressBar/CartProgressBar.jsx';
import CartPayment from './Payment/Payment.jsx';
import CartListInfo from '../../components/Cart/CartListInfo/CartListInfo.jsx';
import CartConfirm from './Confirm/Confirm.jsx';
import CartComplete from './Complete/Complete.jsx';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Checkout = () => {
  const params = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {params.status !== 'complete' && (
        <div className={classes.progressBarLayout}>
          <CartProgressBar />
        </div>
      )}
      {!params.status && (
        <div className={classes.cartInfo}>
          <CartListInfo cartItems={cartItems} />
        </div>
      )}

      {params.status === 'payment' && (
        <div>
          <CartPayment />
        </div>
      )}
      {params.status === 'confirm' && (
        <div>
          <CartConfirm />
        </div>
      )}
      {params.status === 'complete' && (
        <div>
          <CartComplete />
        </div>
      )}
    </div>
  );
};

export default Checkout;
