import React, { useState } from 'react';
import classes from './InvoiceInfoCard.module.scss';
import UnifiedInvoiceTab from './UnifiedInvoiceTab/UnifiedInvoiceTab.jsx';
import DonateInvoiceTab from './DonateInvoiceTab/DonateInvoiceTab.jsx';
import { retrieveMethods } from '../../../../lib/checkoutOptions';
import PropTypes from 'prop-types';
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

const ElectronicTab = ({ setCheckoutDetail, checkoutDetail }) => {
  const [activeRetrieveMethod, setActiveRetrieveMethod] = useState(0);
  const handleCheckoutDetail = (e, idx) => {
    const { name } = e.target;
    const { invoice } = checkoutDetail;
    setActiveRetrieveMethod(idx);
    setCheckoutDetail({
      ...checkoutDetail,
      invoice: { ...invoice, retrieveMethod: { type: name } },
    });
  };
  return (
    <div className={classes.electronicTab}>
      <p>領取方式</p>
      <div className={classes.option}>
        {retrieveMethods.map((method, idx) => (
          <div key={method.id}>
            <input
              type="radio"
              name={method.type}
              checked={activeRetrieveMethod === idx}
              onChange={(e) => handleCheckoutDetail(e, idx)}
            />
            <span>{method.name}</span>
          </div>
        ))}
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
const InvoiceInfoCard = ({ checkoutDetail, setCheckoutDetail }) => {
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
        {activeTab === 0 && (
          <ElectronicTab checkoutDetail={checkoutDetail} setCheckoutDetail={setCheckoutDetail} />
        )}
        {activeTab === 1 && <DonateInvoiceTab />}
        {activeTab === 2 && <UnifiedInvoiceTab />}
      </div>
    </div>
  );
};

InvoiceInfoCard.propTypes = {
  checkoutDetail: PropTypes.object,
  setCheckoutDetail: PropTypes.func,
};

ElectronicTab.propTypes = {
  checkoutDetail: PropTypes.object,
  setCheckoutDetail: PropTypes.func,
};

export default InvoiceInfoCard;
