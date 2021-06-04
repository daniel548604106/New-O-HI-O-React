import React from 'react';
import classes from './ShopInfo.module.scss';
import PropTypes from 'prop-types';
import { formatDate } from '../../../lib/tools';
import Button from '../../Global/Button/Button.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite } from '../../../store/index/indexAction';
const ShopInfo = ({ shop }) => {
  const { user } = shop;
  const dispatch = useDispatch();
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const handleFavorite = (id) => {
    const type = 'shop';
    dispatch(addToFavorite(id, type));
  };
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
                <span>{shop.products.length}</span>
              </div>
              <div>
                <p>關注人數</p>
                <span>288</span>
              </div>
            </div>
            {favoriteShops.find((favoriteShop) => favoriteShop._id === shop._id) ? (
              <div onClick={() => handleFavorite(shop._id)} className={classes.cta}>
                <Button text="關注中" backgroundColor="white" border="true" color="black" />
              </div>
            ) : (
              <div onClick={() => handleFavorite(shop._id)} className={classes.cta}>
                <Button text="加入關注" iconType="add" />
              </div>
            )}
          </div>
          <div className={classes.contact}>
            <div className={classes.user}>
              <div>
                <img src={user.picture} alt="" />
                <span>{user.name}</span>
              </div>
              <div className={classes.button}>
                <Button text="聯絡設計師" backgroundColor="#fff" color="black" border="true" />
              </div>
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
