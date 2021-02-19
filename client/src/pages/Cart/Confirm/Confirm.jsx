import React from 'react';
import classes from './Confirm.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckoutProgress } from '../../../store/cart/cartAction';
import { useHistory } from 'react-router-dom';
import PaymentMethod from '../../../components/Cart/CartConfirm/PaymentMethod/PaymentMethod.jsx';
import ShoppingList from '../../../components/Cart/CartConfirm/ShoppingList/ShoppingList.jsx';
import Button from '../../../components/Global/Button/Button.jsx';
import { apiPostNewOrder } from '../../../api/index';
const CartConfirm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkoutDetail = useSelector((state) => state.checkout.checkoutDetail);
  const user = useSelector((state) => state.user.currentUser);
  const backToPayment = () => {
    dispatch(updateCheckoutProgress(2));
    history.push('/cart/payment');
  };
  const handleSubmitOrder = async () => {
    try {
      console.log('submit');
      const { data } = await apiPostNewOrder(checkoutDetail);
      console.log(data);
    } catch (error) {
      console.log(error);
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
      <ShoppingList />
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
