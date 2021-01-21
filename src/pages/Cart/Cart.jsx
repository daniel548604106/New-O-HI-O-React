import React, { useState } from 'react';
import './Cart.scss';
import { Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { addToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cartAction';
const TotalInfo = () => {
  return (
    <div className="card-total">
      <div className="card-total-header">訂單摘要</div>
      <div className="card-total-body">
        <div className="card-total-body-content">
          <span>商品總計</span>
          <span>NTD 144</span>
        </div>
        <div className="card-total-body-content">
          <span>運費總計</span>
          <span>NTD 50</span>
        </div>
        <div className="card-total-body-content">
          <span>其他折抵</span>
          <span>-NTD 144</span>
        </div>
        <div className="card-total-body-content">
          <span>首購優惠</span>
        </div>
        <Divider />
        <div className="card-total-body-content">
          <span>總結帳金額</span>
          <span>NTD 4000</span>
        </div>
        <div className="card-total-checkout-button">前往結帳</div>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <div className="card">
        <div style={{ display: 'flex' }}>
          <img className="picture" src={item.images[0]} alt="" />
          <div className="description">
            <p>{item.name}</p>
            <span className="discount-tag">
              {(item.discountPrice / item.fullPrice).toFixed(2) * 10} 折
            </span>
            <div className="adjustQty">
              <RemoveIcon
                onClick={() => dispatch(removeItemFromCart(item))}
                style={{ cursor: 'pointer' }}
              />
              <span className="quantity">{item.quantity}</span>
              <AddIcon onClick={() => dispatch(addToCart(item))} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
        <div className="delete" onClick={() => dispatch(clearItemFromCart(item))}>
          <DeleteIcon />
        </div>
        <div className="price" style={{ display: 'flex' }}>
          <div style={{ textDecoration: item.discountPrice ? 'line-through' : 'none' }}>
            ${item.fullPrice}
          </div>
          {item.discountPrice && (
            <div style={{ marginLeft: '5px', color: 'red' }}>${item.discountPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div style={{ margin: '50px auto' }}>
      <h1>Your Cart is Empty</h1>
    </div>
  );
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [amount, setAmount] = useState(1);
  const handleAmountChange = (e) => {
    console.log(e);
  };
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '30px' }}>
      <h1 className="title">Checkout</h1>
      <div className="container">
        {cartItems.length ? (
          <>
            {cartItems.map((item, idx) => (
              <Card key={item.id} item={item} idx={idx} />
            ))}
            <TotalInfo />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
};

export default Checkout;
