import React from 'react';
import classes from './Empty.module.scss';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
const Empty = ({ title }) => {
  const history = useHistory();
  const directTo = () => {
    history.push('/browse');
  };
  return (
    <div className={classes.empty}>
      <p>{title}</p>
      <span onClick={() => directTo()}>來去逛逛吧！</span>
    </div>
  );
};

Empty.propTypes = {
  title: PropTypes.string,
};

export default Empty;
