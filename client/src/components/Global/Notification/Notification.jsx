import React from 'react';
import classes from './Notification.module.scss';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
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
