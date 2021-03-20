import React from 'react';
import classes from './Campaign.module.scss';
import PropTypes from 'prop-types';
const Campaign = ({ t }) => {
  return (
    <div className={classes.campaignLayout}>
      <div className={classes.campaign}>
        <img
          src="https://images.unsplash.com/photo-1484328256245-34b71758c30b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <div>
          <h2 className={classes.title}>{t('campaignTitle')}</h2>
          <p className={classes.content}>{t('campaignContent')}</p>
          <button>{t('joinNow')}</button>
        </div>
      </div>
    </div>
  );
};

Campaign.propTypes = {
  t: PropTypes.func,
};

export default Campaign;
