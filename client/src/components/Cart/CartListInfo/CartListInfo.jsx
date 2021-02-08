import React from 'react';
import classes from './CartListInfo.module.scss';
import CartProductCard from './CartProductCard/CartProductCard.jsx';
import CartSummary from './CartSummary/CartSummary.jsx';
import PropTypes from 'prop-types';
const EmptyCart = () => {
  return (
    <div style={{ margin: '50px auto' }}>
      <h1>Your Cart is Empty</h1>
    </div>
  );
};
const CartListInfo = ({ cartItems }) => {
  return (
    <>
      {cartItems && cartItems.length ? (
        <>
          <div className={classes.selectAll}>
            <input type="checkbox" />
            <p className="title">選擇全部</p>
          </div>
          <div className={classes.container}>
            <div className={classes.productCardsLayout}>
              {cartItems.map((item, idx) => (
                <CartProductCard key={item.id} item={item} idx={idx} />
              ))}
            </div>
            <div className={classes.totalPriceContainer}>
              <CartSummary />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

CartListInfo.propTypes = {
  cartItems: PropTypes.array,
};

export default CartListInfo;
