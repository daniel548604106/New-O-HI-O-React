import React from 'react';
import classes from './CardPaymentOrdererInfoCard.module.scss';
import PropTypes from 'prop-types';
const CardPaymentOrdererInfoCard = ({ setCheckoutDetail, checkoutDetail }) => {
  const handleCheckoutDetail = (e) => {
    const { name, value } = e.target;
    const { personalInfo } = checkoutDetail;
    personalInfo[name] = value;
    setCheckoutDetail({
      ...checkoutDetail,
      personalInfo: { ...personalInfo },
    });
    console.log(checkoutDetail);
  };
  return (
    <>
      <p className={classes.cardTitle}>訂購人資訊</p>
      <div className={classes.cardLayout}>
        <div className={classes.cardBody}>
          <div className={`${classes.name} ${classes.row}`}>
            <p>姓名</p>
            <input onChange={(e) => handleCheckoutDetail(e)} name="name" type="text" />
          </div>
          <div className={`${classes.tel} ${classes.row}`}>
            <p>手機</p>
            <input
              onChange={(e) => handleCheckoutDetail(e)}
              name="phone"
              type="numeric"
              maxLength="10"
            />
          </div>
          <div className={`${classes.email} ${classes.row}`}>
            <p>Email</p>
            <input onChange={(e) => handleCheckoutDetail(e)} name="email" type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

CardPaymentOrdererInfoCard.propTypes = {
  setCheckoutDetail: PropTypes.func,
  checkoutDetail: PropTypes.object,
};

export default CardPaymentOrdererInfoCard;
