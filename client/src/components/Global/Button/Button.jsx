import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
const Button = ({ text, color, backgroundColor, iconType, border }) => {
  return (
    <button
      style={{
        color,
        backgroundColor,
        display: 'flex',
        padding: '5px 10px',

        alignItems: 'center',
        border: border && '1px solid',
      }}
    >
      {iconType === 'add' && <AddIcon />}
      <span style={{ margin: '0' }}>{text}</span>
    </button>
  );
};

Button.propTypes = {
  iconType: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  color: 'white',
  border: false,
  backgroundColor: '#eb7f82',
};
export default Button;
