import './Checkout.scss';

import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import StripeButton from '../../components/StripeButton/StripeButton.jsx';
const TotalInfo = ({ total }) => (
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
      <StripeButton price={total} />
      <div className="card-total-checkout-button">前往結帳</div>
    </div>
  </div>
);

TotalInfo.propTypes = {
  total: PropTypes.number,
};

const Card = () => (
  <div className="cards">
    <div className="card">
      <div style={{ display: 'flex' }}>
        <img
          className="picture"
          src="https://images.unsplash.com/photo-1610917703059-3d8b63ebcfb1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="description">
          <p>新品上市【IWI】toolHex 鋁合金六角中性筆 #10色可選 #黑芯</p>
          <span className="discount-tag">9折</span>
          <select onChange={(e) => handleAmountChange(e.target.value)} name="amount" id="amount">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div className="price">$400</div>
    </div>
  </div>
);

const Checkout = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '30px' }}>
      <h1 className="title">Checkout</h1>
      <div className="container">
        <Card />
        <TotalInfo total="400" />
      </div>
    </div>
  );
};

export default Checkout;
