import React, { useState } from 'react';
import classes from './Payment.module.scss';
import CardPaymentInfoCard from '../../../components/Cart/CartPaymentInfo/CartPaymentInfoCard/CartPaymentInfoCard.jsx';
import CardPaymentOrdererInfoCard from '../../../components/Cart/CartPaymentInfo/CardPaymentOrdererInfoCard/CardPaymentOrdererInfoCard.jsx';
import InvoiceInfoCard from '../../../components/Cart/CartPaymentInfo/InvoiceInfoCard/InvoiceInfoCard.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '../../../components/Global/Button/Button.jsx';
import { deliveryType, paymentType } from '../../../lib/checkoutOptions';
import { useDispatch } from 'react-redux';
import { updateCheckoutDetail } from '../../../store/checkout/checkoutAction';
import { updateCheckoutProgress } from '../../../store/cart/cartAction';
import { useHistory } from 'react-router-dom';

const CartPayment = () => {
  const [checkoutDetail, setCheckoutDetail] = useState({
    deliveryMethod: '7-11 pickup',
    paymentMethod: '7-11 pick-&-pay',
    personalInfo: {
      name: '',
      phone: '',
      email: '',
    },
    invoice: {
      type: '',
      retrieveMethod: {
        type: '',
        code: '',
      },
      ordererFullName: '',
      ordererEmail: '',
    },
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const backToCartList = () => {
    dispatch(updateCheckoutProgress(1));
    history.push('/cart');
  };
  const proceedToConfirm = () => {
    dispatch(updateCheckoutProgress(3));
    dispatch(updateCheckoutDetail(checkoutDetail));
    history.push('/cart/confirm');
  };

  return (
    <div>
      <div onClick={() => backToCartList()} className={classes.backBtn}>
        <ArrowBackIosIcon />
        Back to Cart
      </div>
      <div className={classes.card}>
        <CardPaymentInfoCard
          setCheckoutDetail={setCheckoutDetail}
          checkoutDetail={checkoutDetail}
          options={deliveryType}
          title="選擇配送方式"
        />
      </div>
      <div className={classes.card}>
        <CardPaymentInfoCard
          setCheckoutDetail={setCheckoutDetail}
          checkoutDetail={checkoutDetail}
          options={paymentType}
          title="選擇付款方式"
        />
      </div>
      <div className={classes.card}>
        <CardPaymentOrdererInfoCard
          checkoutDetail={checkoutDetail}
          setCheckoutDetail={setCheckoutDetail}
        />
      </div>
      <div className={classes.card}>
        <InvoiceInfoCard checkoutDetail={checkoutDetail} setCheckoutDetail={setCheckoutDetail} />
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
