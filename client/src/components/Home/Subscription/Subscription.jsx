import React from 'react';
import classes from './Subscription.module.scss';
import PropTypes from 'prop-types';
const Subscription = ({ t }) => {
  return (
    <div className={classes.subscriptionLayout}>
      <div className={classes.subscriptionImage}>
        <img
          src="https://images.unsplash.com/photo-1553335719-239c2726dd15?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=300&q=60"
          alt=""
        />
      </div>
      <div className={classes.subscriptionMain}>
        <h2 className={classes.title}>Be in the know first</h2>
        <p className={classes.description}>
          Receive our style notes! Be this first to hear about sales, special offers and exclusive
          news.
        </p>
        <div className={classes.preferenceLayout}>
          <h2>Email Preferences</h2>
          <p>What clothing types do you want to hear about?</p>
          <form action="" className={classes.optionsLayout}>
            <div className={classes.option}>
              <input type="radio" name="preference" value="men" checked />
              <label htmlFor="">Menswear</label>
            </div>
            <div className={classes.option}>
              <input type="radio" name="preference" value="women" />
              <label htmlFor="">Womenswear</label>
            </div>
          </form>
        </div>
        <div>
          <form action="" className={classes.emailLayout}>
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </form>
          <p>
            By subscribing you accept to <span>Terms and Conditions</span> of O.HI.O
          </p>
        </div>
      </div>
    </div>
  );
};

Subscription.propTypes = {
  t: PropTypes.func,
};

export default Subscription;
