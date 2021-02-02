import React from 'react';
import classes from './Refund.module.scss';
import { useLocation, useHistory, useParams } from 'react-router-dom';
const Refund = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const refundStates = [
    {
      title: 'processing',
      id: 1,
    },
    {
      title: 'refunded',
      id: 2,
    },
    {
      title: 'declined',
      id: 3,
    },
  ];
  const changeTab = (state) => {
    history.push(`/my/refund/${state}`);
  };
  return (
    <div>
      <h2>Refund</h2>
      <ul className={classes.tabs}>
        {refundStates.map((tab) => (
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

export default Refund;
