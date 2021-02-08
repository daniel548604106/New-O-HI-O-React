import React, { useState } from 'react';
import classes from './InvoiceInfoCard.module.scss';
import UnifiedInvoiceTab from './UnifiedInvoiceTab/UnifiedInvoiceTab.jsx';
import DonateInvoiceTab from './DonateInvoiceTab/DonateInvoiceTab.jsx';
const invoiceType = [
  {
    name: '電子發票',
    id: 1,
  },
  {
    name: '捐贈發票',
    id: 2,
  },
  {
    name: '統編發票',
    id: 3,
  },
];

const ElectronicTab = () => {
  return (
    <div className={classes.electronicTab}>
      <p>領取方式</p>
      <div className={classes.option}>
        <input type="radio" name="email" />
        <span>電子郵件</span>
      </div>
      <div className={classes.option}>
        <input type="radio" name="phoneBarcode" />
        <span>手機載具條碼</span>
      </div>
      <div className={classes.option}>
        <input type="radio" name="idBarcode" />
        <span>自然人憑證條碼</span>
      </div>
      <div className={classes.row}>
        <div>
          <p>購買人中文全名</p>
          <input type="text" name="name" />
        </div>
        <div>
          <p>電子郵件</p>
          <input type="text" name="email" />
        </div>
      </div>
      <p className={classes.clarification}>
        請確認資料無誤以免發票無法開立，此資料僅供開立發票使用
      </p>
    </div>
  );
};
const InvoiceInfoCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={classes.invoice}>
      <h2 className={classes.title}>發票選項</h2>
      <div className={classes.body}>
        <ul className={classes.tabs}>
          {invoiceType.map((invoice, idx) => (
            <button
              onClick={() => setActiveTab(idx)}
              className={`${classes.invoiceType} ${activeTab === idx && classes.active}`}
              key={invoice.id}
            >
              {invoice.name}
            </button>
          ))}
        </ul>
        {activeTab === 0 && <ElectronicTab />}
        {activeTab === 1 && <DonateInvoiceTab />}
        {activeTab === 2 && <UnifiedInvoiceTab />}
      </div>
    </div>
  );
};

export default InvoiceInfoCard;
