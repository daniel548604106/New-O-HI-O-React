import React, { useState, useEffect } from 'react';
import classes from './Tabs.module.scss';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
const Tabs = ({ tabs }) => {
  const location = useLocation();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const switchTab = (idx, tab) => {
    setActiveTab(idx);
    history.push(`${location.pathname}?tab=${tab}`);
  };
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div>
      <div className={classes.list}>
        {tabs.map((tab, idx) => (
          <div
            key={tab.name}
            onClick={() => switchTab(idx, tab.location)}
            className={activeTab === idx && classes.active}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
};
export default Tabs;
