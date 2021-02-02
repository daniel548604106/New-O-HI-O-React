import React from 'react';
import classes from './Content.module.scss';
import Account from './Account/Account.jsx';
import Purchase from './Purchase/Purchase.jsx';
import Refund from './Refund/Refund.jsx';
import { useLocation } from 'react-router-dom';
const Content = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes('setting') && <Account />}
      {location.pathname.includes('purchase') && <Purchase />}
      {location.pathname.includes('refund') && <Refund />}
    </div>
  );
};

export default Content;
