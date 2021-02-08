import React from 'react';
import classes from './UnifiedInvoiceTab.module.scss';

const UnifiedInvoice = () => {
  return (
    <div className={classes.unifiedInvoice}>
      <p>公司抬頭</p>
      <input type="text" name="company-name" />
      <div className={classes.row}>
        <div>
          <p>公司統編</p>
          <input type="text" />
        </div>
        <div>
          <p>購買人電子郵件</p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default UnifiedInvoice;
