import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ICfbrAEicsNWFC94Gmcat6YBxsPDbDKhBWTxXEAd89vrOE1z1h9V0EoBNjxXohdrMVugbPcOrBoJikGonTr7rZS00M0kJUB3f';
  const onToken = (token) => {
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="O.HI.O"
      image="https://cdn.dribbble.com/users/2797062/screenshots/14824390/media/9114db5ebca3071ec43c122769dfdd13.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      billingAddress
      shippingAddress
      stripeKey={publishableKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number,
};

export default StripeButton;
