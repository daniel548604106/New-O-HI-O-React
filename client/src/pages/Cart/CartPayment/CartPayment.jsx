import React from 'react';
import classes from './CartPayment.module.scss';
import CardPaymentInfoCard from '../../../components/Cart/CartPaymentInfo/CartPaymentInfoCard/CartPaymentInfoCard.jsx';
import CardPaymentOrdererInfoCard from '../../../components/Cart/CartPaymentInfo/CardPaymentOrdererInfoCard/CardPaymentOrdererInfoCard.jsx';
import InvoiceInfoCard from '../../../components/Cart/CartPaymentInfo/InvoiceInfoCard/InvoiceInfoCard.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '../../../components/Global/Button/Button.jsx';
import { useDispatch } from 'react-redux';
import { updateCheckoutProgress } from '../../../store/cart/cartAction';
import { useHistory } from 'react-router-dom';
const deliveryType = [
  {
    name: '7-11取貨',
    id: 1,
  },
  {
    name: '宅配到府',
    id: 2,
  },
];
const paymentType = [
  {
    name: '7-11取貨付現',
    method: 'pickup',
    id: 1,
  },
  {
    name: '信用卡',
    method: 'credit',
    id: 2,
  },
  {
    name: 'LinePay',
    method: 'linePay',
    id: 3,
  },
  {
    name: 'ATM 付款',
    method: 'atm',
    id: 3,
  },
];

const CartPayment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const backToCartList = () => {
    dispatch(updateCheckoutProgress(1));
    history.push('/cart');
  };
  const proceedToConfirm = () => {
    console.log('====================================');
    console.log();
    console.log('====================================');
    dispatch(updateCheckoutProgress(3));
    history.push('/cart/confirm');
  };
  return (
    <div>
      <div onClick={() => backToCartList()} className={classes.backBtn}>
        <ArrowBackIosIcon />
        Back to Cart
      </div>
      <div className={classes.card}>
        <CardPaymentInfoCard options={deliveryType} title="選擇配送方式" />
      </div>
      <div className={classes.card}>
        <CardPaymentInfoCard options={paymentType} title="選擇付款方式" />
      </div>
      <div className={classes.card}>
        <CardPaymentOrdererInfoCard />
      </div>
      <div className={classes.card}>
        <InvoiceInfoCard />
      </div>
      <div className={classes.nextBtn}>
        <div onClick={() => proceedToConfirm()}>
          <Button text="下一步" />
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
