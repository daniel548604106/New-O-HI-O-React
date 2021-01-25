import React, { useState } from 'react';
import classes from './ProductBanner.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cartAction.jsx';
const ProductBanner = ({ product }) => {
  const scrollBtns = [
    {
      name: 'Product Description',
      scrollTo: 'product-description',
    },
    {
      name: 'Fares & Other Details',
      scrollTo: 'fares-&-others',
    },
    {
      name: 'Evaluation & Comments',
      scrollTo: 'evaluation-&-comments',
    },
  ];
  const [activeBtn, setActiveBtn] = useState(0);
  const dispatch = useDispatch();
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };
  const scrollTo = (idx) => {
    console.log(idx);
    setActiveBtn(idx);
  };
  return (
    <div className={classes.bannerRoot}>
      <div className={classes.bannerLayout}>
        <div className={classes.scrollBtnRow}>
          {scrollBtns.map((scrollBtn, idx) => (
            <div key={scrollBtn.name}>
              <a onClick={() => scrollTo(idx)} className={activeBtn === idx && classes.active}>
                {scrollBtn.name}
              </a>
            </div>
          ))}
        </div>
        <div className={classes.ctaBtnRow}>
          <button className={classes.wishList}>
            <FavoriteBorderIcon />
            <p>Add To WishList</p>
          </button>
          <button onClick={() => addItemToCart(product)} className={classes.addToCart}>
            <p>Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductBanner.propTypes = {
  product: PropTypes.object,
};

export default ProductBanner;
