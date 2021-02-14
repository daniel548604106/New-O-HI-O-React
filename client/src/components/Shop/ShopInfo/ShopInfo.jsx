import React from 'react';
import classes from './ShopInfo.module.scss';
import PropTypes from 'prop-types';
import { formatDate } from '../../../lib/tools';
import Button from '../../Global/Button/Button.jsx';
const ShopInfo = ({ shop }) => {
  const { user } = shop;
  return (
    <>
      {shop && user && (
        <div className={classes.shopInfo}>
          <img src={shop.logo} className={classes.shopLogo} alt="Shop Logo" />
          <div className={classes.mainShopInfo}>
            <div className={classes.detail}>
              <h2>{shop.name}</h2>
              <div>
                <p>
                  開館日期
                  <span className={classes.createdAt}>
                    {shop.createdAt && formatDate(shop.createdAt)}
                  </span>
                </p>
              </div>
              <div>
                <p>商品數量</p>
                <span>113</span>
              </div>
              <div>
                <p>關注人數</p>
                <span>288</span>
              </div>
            </div>
            <div className={classes.cta}>
              <Button text="加入關注" iconType="add" />
            </div>
          </div>
          <div className={classes.contact}>
            <div className={classes.user}>
              <img src={user.picture} alt="" />
              <span>{user.name}</span>
            </div>
            <div className={classes.button}>
              <Button text="聯絡設計師" backgroundColor="#fff" color="black" border="true" />
            </div>
            <div className="">
              <p>回應率</p>
              <span>98%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ShopInfo.propTypes = {
  shop: PropTypes.object,
  user: PropTypes.object,
};

export default ShopInfo;
