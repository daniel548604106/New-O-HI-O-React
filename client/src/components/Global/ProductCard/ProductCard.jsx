import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Chip, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'react';
import classes from './ProductCard.module.scss';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const history = useHistory();
  const directToProduct = () => {
    history.push(`/products/${product._id}`);
    console.log('clicked');
  };
  const addToFavorite = (e) => {
    e.stopPropagation();
    console.log('favorite');
  };
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
          <FavoriteIcon onClick={(e) => addToFavorite(e)} className={classes.heartIcon} />
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
