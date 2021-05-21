import React, { useState } from 'react';
import classes from './CardProductCard.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
const lodash = require('lodash');
import { removeItemFromCart, updateCartItemQuantity } from '../../../../store/cart/cartAction';
const CartProductCard = ({ item, idx, checkoutList, setCheckoutList, isAllChecked }) => {
  const dispatch = useDispatch();
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const updateCheckoutList = (e, item) => {
    e.stopPropagation();
    setCheckboxChecked((checkboxChecked) => !checkboxChecked);
    e.target.checked
      ? setCheckoutList((prevCheckoutList) => [...prevCheckoutList, item])
      : setCheckoutList((prevCheckoutList) =>
          prevCheckoutList.filter((list) => list._id !== item._id),
        );
  };

  const removeItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeItemFromCart(id));
  };
  const updateQuantity = (id, e) => {
    dispatch(updateCartItemQuantity(id, e.target.value));
  };
  return (
    <div className={classes.cardLayout}>
      <div className={classes.header}>
        <div>
          <input
            onChange={(e) => updateCheckoutList(e, item)}
            type="checkbox"
            checked={checkboxChecked}
          />
          <p>{item.publishedBy.name}</p>
        </div>
        <CloseIcon onClick={(e) => removeItem(e, item._id)} className={classes.clearBtn} />
      </div>
      <hr />
      <div className={classes.body}>
        <div className={classes.productInfoRow}>
          <img className={classes.productImage} src={item.images[0]} alt="" />
          <div className={classes.productInfo}>
            <div className={classes.productName}>
              <p>{item.name}</p>
            </div>
            <div className={classes.productQuantity}>
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, e)}
                className={classes.quantitySelect}
                name="quantity"
                id="quantity"
              >
                {lodash.range(1, 10).map((idx) => (
                  <option key={idx} value={idx}>
                    {idx}
                  </option>
                ))}
              </select>
              <span>NT$ {item.discountPrice ? item.discountPrice : item.fullPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  item: PropTypes.object,
  checkoutList: PropTypes.array,
  idx: PropTypes.number,
  setCheckoutList: PropTypes.func,
  isAllChecked: PropTypes.bool,
};
export default CartProductCard;
