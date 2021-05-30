import React from 'react';
import classes from './PaymentMethod.module.scss';
import PropTypes from 'prop-types';
const PaymentMethod = ({ checkoutDetail }) => {
  const { personalInfo, deliveryMethod, paymentMethod } = checkoutDetail;
  if (checkoutDetail && personalInfo) {
    return (
      <>
        <div className={classes.paymentMethod}>
          <span className={classes.title}>付款方式與寄送資訊</span>
        </div>
        <div className={classes.paymentDetail}>
          <ul>
            <li>
              <span className={classes.detailTitle}>配送方式</span>
              {deliveryMethod}
            </li>
            <li>
              <span className={classes.detailTitle}>付款方式</span>
              {paymentMethod}
            </li>
            <li>
              <span className={classes.detailTitle}>收件者 </span>
              {personalInfo.name}
            </li>
            <li>
              <span className={classes.detailTitle}>聯絡電話</span>
              {personalInfo.phone}
            </li>
            <li>
              <span className={classes.detailTitle}>Email </span>
              {personalInfo.email}
            </li>
            <li>
              <span className={classes.detailTitle}>取貨門市</span>
              89156-領航-桃園市中壢區領航北路二段239號1樓
            </li>
            <li>
              <span className={classes.detailTitle}>發票類型</span>二聯電子發票博客來會員載具
            </li>
          </ul>
        </div>
      </>
    );
  }
};
PaymentMethod.propTypes = {
  checkoutDetail: PropTypes.object,
};
export default PaymentMethod;
