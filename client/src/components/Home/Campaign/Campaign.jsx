import React from 'react';
import classes from './Campaign.module.scss';
const Campaign = () => {
  return (
    <div className={classes.campaignLayout}>
      <img
        src="https://images.unsplash.com/photo-1484328256245-34b71758c30b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt=""
      />
      <div>
        <h2 className={classes.title}>5% OFF your first purchase</h2>
        <p className={classes.content}>
          Join O.HI.O today, and receive 5% off your first order.
          <br /> Limited to 72 hours
        </p>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Campaign;
