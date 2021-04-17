import React, { useEffect } from 'react';
import classes from './DesignShopInfo.module.scss';
import AddIcon from '@material-ui/icons/Add';
import Stars from '../../Global/Stars/Stars.jsx';
import googleLogo from '../../../assets/images/global/google.svg';
import facebookLogo from '../../../assets/images/global/facebook.svg';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../../store/index/indexAction';
import { apiPatchChat } from '../../../api/index';
import { toggleChat } from '../../../store/chat/chatAction';
const DesignShopInfo = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  useEffect(() => {
    console.log(product.publishedBy);
  }, []);
  const followShop = (id) => {
    const type = 'shop';
    dispatch(addToFavorite(id, type));
    console.log('follow');
  };
  const directToShop = (account) => {
    history.push(`/shop/${account}?tab=product`);
  };
  let hasShopFollowed = false;
  const patchChat = async (id) => {
    try {
      dispatch(toggleChat());
      console.log(id);
      const { data } = await apiPatchChat(id);
      console.log(data);
    } catch (error) {
      console.log(error);
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
          {/* {product.images.map((image) => (
            <img key={image} src={image} alt={product.name} />
          ))} */}
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
};

export default DesignShopInfo;
