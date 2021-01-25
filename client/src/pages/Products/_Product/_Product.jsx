import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import { Divider, Button } from '@material-ui/core';
import Notification from '../../../components/notification';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Loader from '../../../components/loader';
import { openLoginModal } from '../../../store/actions/indexActions';
import { useHistory, useParams } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { listProducts } from '../../../store/product/productAction';
import { addToCart } from '../../../store/cart/cartAction';
import { apiGetProduct } from '../../../api/index';
import classes from './_Product.module.scss';
import DesignShopInfo from '../../../components/Product/DesignShopInfo/DesignShopInfo.jsx';
import ProductCTA from '../../../components/Product/ProductCTA/ProductCTA.jsx';
import ProductInfo from '../../../components/Product/ProductInfo/ProductInfo.jsx';
import ProductDescription from '../../../components/Product/ProductDescription/ProductDescription.jsx';
import ProductDisplay from '../../../components/Product/ProductDisplay/ProductDisplay.jsx';
const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const isLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [numOfPurchase, setNumOfPurchase] = useState(1);
  const [product, setProduct] = useState('');
  const checkout = () => {
    if (isLoggedIn) {
      return dispatch(openLoginModal());
    }
    history.push('/checkout');
  };
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await apiGetProduct(params.id);
      console.log(data.product);
      setProduct(data.product);
    };
    getProduct();
  }, []);
  const Product = () => {
    if (numOfPurchase === 1) return;
    setNumOfPurchase((prevNum) => (prevNum > 1 ? (prevNum -= 1) : null));
  };

  return (
    <div className={classes.productRoot}>
      <div className={classes.containerLayout}>
        <div className={classes.productDisplay}>
          <ProductDisplay product={product} />
        </div>
        <div className={classes.productMainInfo}>
          <div className={classes.info}>
            <ProductInfo product={product} />
          </div>
          <div className={classes.cta}>
            <ProductCTA product={product} />
          </div>
        </div>
      </div>
      <div className={classes.containerLayout}>
        <div className={classes.productDescription}>
          <ProductDescription product={product} />
        </div>
        <div className={classes.designShopInfo}>
          <DesignShopInfo />
        </div>
      </div>
    </div>
  );
};

export default Product;
