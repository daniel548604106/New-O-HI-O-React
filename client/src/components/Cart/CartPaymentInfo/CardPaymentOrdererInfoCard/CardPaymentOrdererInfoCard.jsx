import React from 'react';
import classes from './CardPaymentOrdererInfoCard.module.scss';
const CardPaymentOrdererInfoCard = () => {
  return (
    <>
      <p className={classes.cardTitle}>訂購人資訊</p>
      <div className={classes.cardLayout}>
        <div className={classes.cardBody}>
          <div className={`${classes.name} ${classes.row}`}>
            <p>姓名</p>
            <input type="text" />
          </div>
          <div className={`${classes.tel} ${classes.row}`}>
            <p>手機</p>
            <input type="text" />
          </div>
          <div className={`${classes.email} ${classes.row}`}>
            <p>Email</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPaymentOrdererInfoCard;
