import PropTypes from 'prop-types';
import React from 'react';

import classes from './Reminder.module.scss';
const Reminder = ({ title, text }) => {
  return (
    <div className={classes.reminder}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

Reminder.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Reminder;
