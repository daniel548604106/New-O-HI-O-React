import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ErrorPage.module.scss';
const ErrorPage = () => {
  return (
    <div className={classes.errorPage}>
      <p>Oops! Something went wrong. </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
