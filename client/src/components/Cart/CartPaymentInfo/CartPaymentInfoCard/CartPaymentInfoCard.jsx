import React, { useState, useEffect } from 'react';
import classes from './CartPaymentInfoCard.module.scss';
import PropTypes from 'prop-types';
const CartPaymentInfoCard = ({ options, title, setCheckoutDetail, checkoutDetail }) => {
  const [activeCheckbox, setActiveCheckbox] = useState(0);
  const handleCheckoutDetail = (idx) => {
    console.log(idx, options[idx].type);
    setActiveCheckbox(idx);
    title === '選擇配送方式'
      ? setCheckoutDetail({ ...checkoutDetail, deliveryMethod: options[idx].type })
      : setCheckoutDetail({ ...checkoutDetail, paymentMethod: options[idx].type });
    console.log(checkoutDetail);
  };

  useEffect(() => {
    console.log(checkoutDetail);
  }, []);
  return (
    <div>
      <h2 className={classes.cartTitle}>{title}</h2>
      <div className={classes.cardBody}>
        <ul>
          {options.map((option, idx) => (
            <li key={option.id}>
              <input
                onChange={() => handleCheckoutDetail(idx)}
                type="radio"
                checked={idx === activeCheckbox}
              />
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CartPaymentInfoCard.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  setCheckoutDetail: PropTypes.func,
  checkoutDetail: PropTypes.object,
};

export default CartPaymentInfoCard;
