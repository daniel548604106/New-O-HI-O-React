import React from 'react';
import classes from './CardProductCard.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
const lodash = require('lodash');
import { removeItemFromCart, updateCartItemQuantity } from '../../../../store/cart/cartAction';
const CartProductCard = ({ item, idx }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log('remove', id);
    dispatch(removeItemFromCart(id));
  };
  const updateQuantity = (id, e) => {
    dispatch(updateCartItemQuantity(id, e.target.value));
    console.log(id, e.target.value);
  };
  return (
    <div className={classes.cardLayout}>
      <div className={classes.header}>
        <div>
          <input type="checkbox" />
          <p>{item.name}</p>
        </div>
        <CloseIcon onClick={() => removeItem(item._id)} className={classes.clearBtn} />
      </div>
      <hr />
      <div className={classes.body}>
        <div className={classes.productInfoRow}>
          <img className={classes.productImage} src={item.images[0]} alt="" />
          <div className={classes.productInfo}>
            <div>
              <p>{item.name}</p>
              <span>一個黑胡桃黃銅插畫 （附送 3m貼）</span>
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
  idx: PropTypes.number,
};
export default CartProductCard;
