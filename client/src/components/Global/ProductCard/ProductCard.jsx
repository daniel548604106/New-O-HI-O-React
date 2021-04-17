import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'react';
import classes from './ProductCard.module.scss';
import { useHistory } from 'react-router-dom';
import { addToFavorite, openLoginModal } from '../../../store/index/indexAction.js';
import Skeleton from 'react-loading-skeleton';

const ProductCardLoading = () => {
  return (
    <>
      <Skeleton height={150} width={150} />
      <Skeleton height={10} width={100} style={{ marginTop: '10px' }} />
      <Skeleton height={10} width={100} />
    </>
  );
};

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
            {product.discountPrice / product.fullPrice > 0.1
              ? Math.floor((product.discountPrice / product.fullPrice) * 10)
              : Math.ceil((product.discountPrice / product.fullPrice) * 10)}
            折
          </p>
        )}
      </div>
      {product ? (
        <div
          className={classes.card}
          key={product.id}
          onClick={() => directToProduct()}
          style={{ textDecoration: 'none' }}
        >
          <div className={classes.mainPicture}>
            <img
              className={classes.media}
              loading="lazy"
              src={product.images[0]}
              alt={product.name}
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
        </div>
      ) : (
        <>
          <ProductCardLoading />
          <Skeleton height={150} width={150} />
          <Skeleton height={150} width={150} />
        </>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.Array,
  collection: PropTypes.String,
};

export default ProductCard;
