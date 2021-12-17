import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';

import classes from './Notification.module.scss';
const Notification = ({ title }) => {
  return (
    <div className={classes.notificationBg}>
      <p>{title}</p>
      <div className={classes.closeBtn}>
        <CloseIcon />
      </div>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
