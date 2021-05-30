import React from 'react';
import classes from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className={classes.errorPage}>
      <p>Oops! Something went wrong. </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
