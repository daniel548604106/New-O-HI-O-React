import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import facebookLogo from '../../../assets/images/global/facebook.svg';
import googleLogo from '../../../assets/images/global/google.svg';
import notify from '../../../lib/notification';
import { toggleChat } from '../../../store/chat/chatAction';
import { addToFavorite } from '../../../store/index/indexAction';
import Stars from '../../Global/Stars/Stars.jsx';
import classes from './DesignShopInfo.module.scss';

const DesignShopInfo = ({ product, shopInfo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favoriteShops = useSelector((state) => state.global.favoriteShops);

  const followShop = (id) => {
    const type = 'shop';
    dispatch(addToFavorite(id, type));
  };
  const directToShop = (account) => {
    history.push(`/shop/${account}?tab=product`);
  };
  let hasShopFollowed = false;
  const patchChat = async (id) => {
    try {
      dispatch(toggleChat());
    } catch (error) {
      notify('很抱歉修改失敗');
    }
  };
  return (
    <div>
      <div className={classes.designShopRoot}>
        <h2 className={classes.title}>關於設計館</h2>
        <div className={classes.designShopLayout}>
          <img
            onClick={() => directToShop(product.publishedBy.account)}
            className={classes.designShopLogo}
            src={product && product.publishedBy.logo}
            alt="shop-logo"
          />
          <div>
            <p>{product && product.publishedBy.name}</p>
            <Stars />
          </div>
        </div>
        {favoriteShops && (
          <div className={classes.ctaBtnRow}>
            {hasShopFollowed ? (
              <button
                onClick={() => followShop(product.publishedBy._id)}
                className={classes.followed}
              >
                <DoneIcon />
                <p>關注中</p>
              </button>
            ) : (
              <button
                onClick={() => followShop(product.publishedBy._id)}
                className={classes.follow}
              >
                <AddIcon />
                <p>加入關注</p>
              </button>
            )}

            <button onClick={() => patchChat(product.publishedBy.user)} className={classes.contact}>
              <p>聯絡店家</p>
            </button>
          </div>
        )}
        <div className={classes.productPreview}>
          {shopInfo &&
            shopInfo.products.map((product) => (
              <>
                <img key={product.name} src={product.images[0]} alt={product.name} />
                <p>{product.name}</p>
              </>
            ))}
        </div>
        <hr className={classes.separator} />
        <div className={classes.shareRow}>
          <h1 className={classes.title}>Share</h1>
          <div>
            <img style={{ width: '30px', height: '30px' }} src={facebookLogo} alt="" />
          </div>
          <div>
            <img style={{ width: '30px', height: '30px' }} src={googleLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

DesignShopInfo.propTypes = {
  product: PropTypes.object,
  shopInfo: PropTypes.object,
};

export default DesignShopInfo;
