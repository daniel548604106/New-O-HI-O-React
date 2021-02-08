import React from 'react';
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
const DesignShopInfo = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favoriteShops = useSelector((state) => state.global.favoriteShops);

  const followShop = (id) => {
    const type = 'shop';
    dispatch(addToFavorite(id, type));
    console.log('follow');
  };
  const directToShop = (account) => {
    history.push(`/shop/${account}`);
  };
  return (
    <div>
      <div className={classes.designShopRoot}>
        <h2>About Design Shop</h2>
        <div className={classes.designShopLayout}>
          <img
            onClick={() => directToShop(product.publishedBy.account)}
            className={classes.designShopLogo}
            src={product && product.name}
            alt="shop-logo"
          />
          <div>
            <p>{product && product.name}</p>
            <Stars />
          </div>
        </div>
        <div className={classes.ctaBtnRow}>
          {false ? (
            <button
              onClick={() => followShop(product.publishedBy._id)}
              className={classes.followed}
            >
              <DoneIcon />
              <p>關注中</p>
            </button>
          ) : (
            <button onClick={() => followShop(product.publishedBy._id)} className={classes.follow}>
              <AddIcon />
              <p>加入關注</p>
            </button>
          )}

          <button className={classes.contact}>
            <p>聯絡店家</p>
          </button>
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
