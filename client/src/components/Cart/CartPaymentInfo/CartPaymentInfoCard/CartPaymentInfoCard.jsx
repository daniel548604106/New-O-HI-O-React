import React, { useState } from 'react';
import classes from './CartPaymentInfoCard.module.scss';
import PropTypes from 'prop-types';
const CartPaymentInfoCard = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div>
      <h2 className={classes.cartTitle}>{title}</h2>
      <div className={classes.cardBody}>
        <ul>
          {options.map((option, idx) => (
            <li key={option.id}>
              <input
                onChange={() => setSelectedOption(idx)}
                type="radio"
                checked={idx === selectedOption}
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
};

export default CartPaymentInfoCard;
