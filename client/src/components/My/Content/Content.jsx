import React from 'react';
import classes from './Content.module.scss';
import Account from './Account/Account.jsx';
import Purchase from './Purchase/Purchase.jsx';
import { useLocation } from 'react-router-dom';
const Content = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes('setting') && <Account />}
      {location.pathname.includes('purchase') && <Purchase />}
    </div>
  );
};

export default Content;
