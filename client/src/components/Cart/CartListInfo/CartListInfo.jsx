import React, { useState, useEffect } from 'react';
import classes from './CartListInfo.module.scss';
import CartProductCard from './CartProductCard/CartProductCard.jsx';
import Empty from '../../Global/Empty/Empty.jsx';
import CartSummary from './CartSummary/CartSummary.jsx';
import MobileCheckoutButton from './MobileCheckoutButton/MobileCheckoutButton.jsx';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
const CartListInfo = ({ cartItems }) => {
  const [checkoutList, setCheckoutList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true);
  useEffect(() => {
    console.log('checked', checkoutList);
    checkoutList.length === cartItems.length ? setIsAllChecked(true) : setIsAllChecked(false);
  }, [checkoutList]);
  useEffect(() => {
    setCheckoutList(cartItems);
  }, [cartItems]);

  const toggleCheckAll = async (e) => {
    if (isAllChecked) {
      setCheckoutList([]);
      console.log('changed');
    } else {
      setCheckoutList(cartItems);
      console.log('change');
    }
    setIsAllChecked((prev) => !prev);
  };
  return (
    <div className={classes.cartLayout}>
      {cartItems && cartItems.length ? (
        <>
          <div className={classes.selectAll}>
            <input type="checkbox" onChange={(e) => toggleCheckAll(e)} checked={isAllChecked} />
            <p className="title">選擇全部</p>
          </div>
          <div className={classes.container}>
            <div className={classes.productCardsLayout}>
              {cartItems.map((item, idx) => (
                <CartProductCard
                  isAllChecked={isAllChecked}
                  setCheckoutList={setCheckoutList}
                  checkoutList={checkoutList}
                  key={item.id}
                  item={item}
                  idx={idx}
                />
              ))}
            </div>
            <div className={classes.totalPriceContainer}>
              <CartSummary />
            </div>
            <div className={classes.mobileCheckoutButton}>
              <MobileCheckoutButton />
            </div>
          </div>
        </>
      ) : (
        <Empty title="你的購物車裡目前沒有商品喔！" />
      )}
    </div>
  );
};

CartListInfo.propTypes = {
  cartItems: PropTypes.array,
};

export default CartListInfo;
