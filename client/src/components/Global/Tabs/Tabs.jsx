import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import classes from './Tabs.module.scss';
const Tabs = ({ tabs }) => {
  const location = useLocation();
  const history = useHistory();
  const switchTab = (idx, tab) => {
    history.push(`${location.pathname}?tab=${tab}`);
  };

  return (
    <div className={classes.list}>
      {tabs.map((tab, idx) => (
        <div
          key={tab.name}
          onClick={() => switchTab(idx, tab.location)}
          className={location.search.includes(`${tab.location}`) && classes.active}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
};
export default Tabs;
