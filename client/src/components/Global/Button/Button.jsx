import React from 'react';
import classes from './Button.module.scss';
import PropTypes from 'prop-types';
const Button = ({ text, color, backgroundColor }) => {
  return <button style={{ color, backgroundColor }}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  color: 'white',
  backgroundColor: '#eb7f82',
};
export default Button;
