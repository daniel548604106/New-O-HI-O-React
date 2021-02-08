import React from 'react';
import classes from './DonateInvoiceTab.module.scss';
const DonateInvoiceTab = () => {
  return (
    <div className={classes.donateTab}>
      <div className={classes.row}>
        <input type="radio" name="children's association" />
        <p>社團法人教育及兒童青少年發展協會(3339)</p>
      </div>
      <div className={classes.row}>
        <input type="radio" name="others" />
        <p>其他</p>
        <input
          className={classes.otherInput}
          type="text"
          placeholder="請輸入欲捐贈機構的單位代號"
        />
      </div>
      <div className={classes.info}>
        <div>
          <p>購買人中文全名</p>
          <input type="text" name="name" />
        </div>
        <div>
          <p>電子郵件</p>
          <input type="text" name="email" />
        </div>
      </div>
    </div>
  );
};

export default DonateInvoiceTab;
