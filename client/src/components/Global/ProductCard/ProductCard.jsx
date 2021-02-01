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
import { addFavProduct, openLoginModal } from '../../../store/index/indexAction.js';
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
  const addToFavorite = (e, id) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      const token = Cookie.get('token');
      dispatch(addFavProduct(id, token));
      console.log('favorite');
      return;
    }
    dispatch(openLoginModal());
  };

  useEffect(() => {
    if (!favoriteProducts) return;
    const searchFavorite = () => {
      setAddedFavorite(favoriteProducts.indexOf(product._id));
    };
    searchFavorite();
  }, [favoriteProducts]);

  return (
    <div className={classes.root}>
      <div className={classes.label}>New</div>
      <Card
        className={classes.card}
        key={product.id}
        onClick={() => directToProduct()}
        style={{ textDecoration: 'none' }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.images[0]}
            title="Contemplative Reptile"
          />
          <FavoriteIcon
            onClick={(e) => addToFavorite(e, product._id)}
            className={[classes.heartIcon, addedFavorite > -1 && classes.activeHeartIcon]}
          />
        </CardActionArea>
        <div className={classes.cardContent}>
          <h2 className={classes.productName}>{product.name}</h2>
          <div>
            <h2 className={classes.brandName}>Kenzo</h2>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              {product.discountPrice && (
                <p className={classes.discountPrice}>
                  <span>NTD</span> ${product.discountPrice}
                </p>
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
