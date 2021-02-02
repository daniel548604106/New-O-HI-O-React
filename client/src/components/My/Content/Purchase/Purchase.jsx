import React, { useState, useEffect } from 'react';
import classes from './Purchase.module.scss';
import { useLocation, useParams, useHistory } from 'react-router-dom';
const Purchase = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('unpaid');
  const orderTabs = [
    {
      title: 'unpaid',
      id: 1,
    },
    {
      title: 'processing',
      id: 2,
    },
    {
      title: 'shipped',
      id: 3,
    },
    {
      title: 'completed',
      id: 4,
    },
    {
      title: 'canceled',
      id: 5,
    },
  ];

  const changeTab = (state) => {
    history.push(`/my/purchase/${state}`);
    setActiveTab(state);
  };

  return (
    <div>
      <h2>My Orders</h2>
      <ul className={classes.tabs}>
        {orderTabs.map((tab) => (
          <li
            onClick={() => changeTab(tab.title)}
            className={`${classes.tabTitle} ${
              location.pathname.includes(tab.title) && classes.active
            }`}
            key={tab._id}
          >
            {tab.title}
            <span>20</span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Purchase;
