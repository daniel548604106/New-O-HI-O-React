import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Cookie from 'js-cookie';
import CardMedia from '@material-ui/core/CardMedia';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'react';
import classes from './ProductCard.module.scss';
import { useHistory } from 'react-router-dom';
import { addToFavorite, openLoginModal } from '../../../store/index/indexAction.js';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [addedFavorite, setAddedFavorite] = useState(-1);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const directToProduct = () => {
    history.push(`/products/${product._id}`);
    console.log('clicked');
  };
  const addItemToFavorite = (e, id) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      const type = 'product';
      dispatch(addToFavorite(id, type));
      console.log('favorite');
      return;
    }
    dispatch(openLoginModal());
  };

  useEffect(() => {
    if (!favoriteProducts) return;
    const searchFavorite = () => {
      const productIds = favoriteProducts.map((item) => {
        return item._id;
      });
      setAddedFavorite(productIds.indexOf(product._id));
    };
    searchFavorite();
  }, [favoriteProducts]);

  return (
    <div className={classes.root}>
      <div className={classes.label}>
        <p className={classes.new}>新品</p>
        {product.discountPrice && (
          <p className={classes.discount}>
            {(product.discountPrice / product.fullPrice).toFixed(1) * 10} 折
          </p>
        )}
      </div>

      <Card
        className={classes.card}
        key={product.id}
        onClick={() => directToProduct()}
        style={{ textDecoration: 'none' }}
      >
        <div className={classes.mainPicture}>
          <CardMedia
            className={classes.media}
            image={product.images[0]}
            title="Contemplative Reptile"
          />
          <FavoriteIcon
            onClick={(e) => addItemToFavorite(e, product._id)}
            className={`${classes.heartIcon} ${addedFavorite > -1 && classes.activeHeartIcon}`}
          />
        </div>
        <div className={classes.cardContent}>
          <h2 className={classes.productName}>{product.name}</h2>
          <div>
            <h2 className={classes.brandName}>{product.publishedBy.name}</h2>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span className={classes.discountPrice}>NTD</span>
              {product.discountPrice && (
                <p className={classes.discountPrice}>${product.discountPrice}</p>
              )}
              <p
                className={`
                  ${classes.originalPrice} 
                  ${!product.discountPrice && classes.noDiscountPrice}
                `}
                style={{
                  textDecoration: product.discountPrice ? 'line-through' : ' none',
                }}
              >
                ${product.fullPrice}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.Array,
  collection: PropTypes.String,
};

export default ProductCard;
