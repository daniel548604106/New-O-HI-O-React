import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { apiPostNewOrder } from '../../../api/index';
import PaymentMethod from '../../../components/Cart/CartConfirm/PaymentMethod/PaymentMethod.jsx';
import ShoppingList from '../../../components/Cart/CartConfirm/ShoppingList/ShoppingList.jsx';
import Button from '../../../components/Global/Button/Button.jsx';
import notify from '../../../lib/notification';
import { updateCheckoutProgress } from '../../../store/cart/cartAction';
import { resetCartItems } from '../../../store/cart/cartAction';
import { resetCheckoutList } from '../../../store/checkout/checkoutAction';
import classes from './Confirm.module.scss';
const CartConfirm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkoutInfo = useSelector((state) => state.checkout);
  const checkoutDetail = useSelector((state) => state.checkout.checkoutDetail);
  const checkoutList = useSelector((state) => state.checkout.checkoutList);
  const user = useSelector((state) => state.user.currentUser);
  const backToPayment = () => {
    dispatch(updateCheckoutProgress(2));
    history.push('/cart/payment');
  };
  const handleSubmitOrder = async () => {
    try {
      const { data } = await apiPostNewOrder(checkoutInfo);
      history.push(`/cart/complete/${data.newOrder._id}`);
      dispatch(resetCartItems());
      dispatch(resetCheckoutList());
    } catch (error) {
      notify('很抱歉！交易失敗！請重新再試一次');
    }
  };
  return (
    <div>
      <p className={classes.greeting}>
        親愛的{' '}
        <span className={classes.user}>
          {user.name} ({user.email.split('@')[0]})
        </span>{' '}
        您好，請確認以下購物資訊是否正確
      </p>
      <ShoppingList checkoutList={checkoutList} />
      <PaymentMethod checkoutDetail={checkoutDetail} />
      <div className={classes.btnRow}>
        <div onClick={() => backToPayment()}>
          <Button text="上一步" backgroundColor="white" color="black" border="true" />
        </div>
        <div className={classes.submitBtn} onClick={() => handleSubmitOrder()}>
          <Button text="確認送出" />
        </div>
      </div>
    </div>
  );
};

export default CartConfirm;
