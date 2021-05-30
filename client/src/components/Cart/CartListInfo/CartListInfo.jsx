import React, { useState, useEffect } from 'react';
import classes from './CartListInfo.module.scss';
import CartProductCard from './CartProductCard/CartProductCard.jsx';
import Empty from '../../Global/Empty/Empty.jsx';
import CartSummary from './CartSummary/CartSummary.jsx';
import MobileCheckoutButton from './MobileCheckoutButton/MobileCheckoutButton.jsx';
import PropTypes from 'prop-types';
import { updateCheckoutProgress } from '../../../store/cart/cartAction';
import {
  addItemToCheckoutList,
  updateSubtotal,
  updateTotal,
} from '../../../store/checkout/checkoutAction';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const CartListInfo = ({ cartItems }) => {
  const [checkoutList, setCheckoutList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    checkoutList.length === cartItems.length ? setIsAllChecked(true) : setIsAllChecked(false);
  }, [checkoutList, cartItems.length]);
  useEffect(() => {
    setCheckoutList(cartItems);
  }, [cartItems]);

  const toggleCheckAll = async (e) => {
    if (isAllChecked) {
      setCheckoutList([]);
    } else {
      setCheckoutList(cartItems);
    }
    setIsAllChecked((prev) => !prev);
  };

  const proceedToCheckout = () => {
    dispatch(updateCheckoutProgress(2));
    dispatch(addItemToCheckoutList(checkoutList));
    dispatch(updateSubtotal(subTotalPrice));
    dispatch(updateTotal());
    history.push('/cart/payment');
  };
  useEffect(() => {
    setTotalPrice(subTotalPrice);
  }, [subTotalPrice]);

  useEffect(() => {
    setSubTotalPrice(
      checkoutList.reduce((prev, current) => {
        return prev + Number(current.quantity) * (current.discountPrice || current.fullPrice);
      }, 0),
    );
  }, [checkoutList]);
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
              <CartSummary
                proceedToCheckout={proceedToCheckout}
                subTotalPrice={subTotalPrice}
                totalPrice={totalPrice}
              />
            </div>
            <div className={classes.mobileCheckoutButton}>
              <MobileCheckoutButton proceedToCheckout={proceedToCheckout} totalPrice={totalPrice} />
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
