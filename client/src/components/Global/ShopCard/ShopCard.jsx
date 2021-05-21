import React, { useState, useEffect } from 'react';
import classes from './ShopCard.module.scss';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import { addToFavorite, openLoginModal } from '../../../store/index/indexAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const ShopCard = ({ shop }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const followShop = () => {
    if (isUserLoggedIn) {
      const type = 'shop';
      dispatch(addToFavorite(shop._id, type));
      return;
    }
    dispatch(openLoginModal());
  };
  const [followedFavoriteShop, setFollowedFavoriteShop] = useState(-1);
  const toShop = (id) => {
    history.push(`/shop/${id}?tab=product`);
  };
  useEffect(() => {
    if (!favoriteShops) return;
    const checkFollowedShop = () => {
      const shopIds = favoriteShops.map((item) => {
        return item._id;
      });
      setFollowedFavoriteShop(shopIds.indexOf(shop._id));
    };
    checkFollowedShop();
  }, [shop, favoriteShops]);

  return (
    <div className={classes.shopCardLayout}>
      <div onClick={() => toShop(shop.account)} className={classes.profileImageLayout}>
        <div className={classes.mainImage}>
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className={classes.restImages}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.textLayout}>
        <div>
          <p className={classes.shopName}>{shop.name}</p>
          <p className={classes.followers}>
            Followers <span>{shop.followers}</span>
          </p>
        </div>

        <button
          onClick={() => followShop()}
          className={`${followedFavoriteShop !== -1 && classes.following}  ${classes.followBtn}`}
        >
          {followedFavoriteShop === -1 ? (
            <>
              <AddIcon className={classes.icon} />
              <span>Follow</span>
            </>
          ) : (
            <>
              <DoneIcon className={classes.icon} />
              <span>Following</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.object,
};

export default ShopCard;
