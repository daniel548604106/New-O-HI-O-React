import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import { Divider, IconButton, Button } from '@material-ui/core';
import { product } from '../../../lib/fakeData';
import Notification from '../../../components/notification';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Loader from '../../../components/loader';
import { openLoginModal } from '../../../store/actions/indexActions';
import { useHistory } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { listProducts } from '../../../store/actions/productActions';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  main: {
    display: 'block',

    [theme.breakpoints.up('800')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  productName: {
    [theme.breakpoints.up('800')]: {
      fontSize: '22px',
    },
  },
  mainInfo: {
    minWidth: '300px',
    [theme.breakpoints.up('800')]: {
      marginLeft: '30px',
    },
  },
  disabled: {
    backgroundColor: 'gray',
    color: 'black',
  },
  imageTab: {
    width: '40px',
    height: '40px',
    [theme.breakpoints.up('600')]: {
      width: '80px',
      height: '80px',
    },
    border: 'white',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:not(:last-of-type)': {
      marginRight: '20px',
    },
  },
  activeSize: {
    backgroundColor: '#fa9b20',
    border: 'none',
  },
  activeColor: {
    border: 'black',
  },
  removeBtn: {
    padding: '5px',
    backgroundColor: 'black',
    color: 'white',
  },
  activeTab: {
    color: 'black',
    fontWeight: 500,
  },
}));

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const classes = useStyles();
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [numOfPurchase, setNumOfPurchase] = useState(1);
  const checkout = () => {
    if (isLoggedIn) {
      return dispatch(openLoginModal());
    }
    history.push('/checkout');
  };
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  const decrement = () => {
    if (numOfPurchase === 1) return;
    setNumOfPurchase((prevNum) => (prevNum > 1 ? (prevNum -= 1) : null));
  };

  const addToCart = (product) => {
    const addedProduct = JSON.stringify({
      id: product.id,
      totalNum: numOfPurchase,
      size: activeSize,
      color: activeColor,
    });
    //check if cart has products
    if (!localStorage.getItem('cart')) {
      let cart = [];
      cart.push({
        id: product.id,
        totalNum: numOfPurchase,
        size: activeSize,
        color: activeColor,
      });
      return localStorage.setItem('cart', JSON.stringify(cart));
    }
    let originalCart = JSON.parse(localStorage.getItem('cart'));

    const data = originalCart.filter((cart) => {
      return cart.id === product.id;
    });
    if (data) {
      return (originalCart.totalNum += numOfPurchase);
    } else {
      originalCart.push({
        id: product.id,
        totalNum: numOfPurchase,
        size: activeSize,
        color: activeColor,
      });
    }
    console.log(data);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Notification type={'error'} />
      ) : (
        <div className={classes.root}>
          <div className={classes.main}>
            <div
              className="carousel"
              style={{
                width: '100%',
                position: 'relative',
                margin: '0 auto',
                maxWidth: '600px',
                paddingTop: '60%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '20px',
                backgroundImage: `url(${product.images[activeImage]})`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  left: '50%',
                  transform: 'translate(-50%,0)',
                  position: 'absolute',
                  bottom: '5%',
                }}
              >
                {product.images.map((image, idx) => (
                  <img
                    src={image}
                    className={classes.imageTab}
                    key={image}
                    onClick={() => setActiveImage(idx)}
                    alt=""
                  />
                ))}
              </div>
            </div>

            <p>{products.title}</p>
            <div className={classes.mainInfo}>
              <h3
                style={{ marginTop: '10px', marginBottom: '10px' }}
                className={classes.productName}
              >
                {product.name}
              </h3>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                  <StarIcon style={{ width: '20px', height: '20px', color: '#f0d90a' }} />
                  <p style={{ fontSize: '14px' }}>
                    {product.ratings}{' '}
                    <span style={{ color: 'gray' }}>({product.numOfRatings})</span>
                  </p>
                </div>
                <div>
                  <span style={{ fontWeight: 500, fontSize: '16px', marginRight: '10px' }}>
                    $ {product.price}
                  </span>
                  <span style={{ textDecoration: 'line-through', fontSize: '12px', color: 'gray' }}>
                    $ {product.originalPrice}
                  </span>
                </div>
              </div>
              <Divider style={{ margin: '10px 0 ' }} />
              <div>
                <h5 style={{ margin: '10px 0' }}>Available Sizes</h5>
                <div style={{ display: 'flex' }}>
                  {product.availableSizes.map((sizes, idx) => (
                    <p
                      onClick={() => setActiveSize(idx)}
                      className={activeSize === idx ? classes.activeSize : null}
                      style={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '99999px',
                        border: '1px solid gray',
                        marginRight: '10px',
                      }}
                      key={sizes.size}
                    >
                      {sizes.size}
                    </p>
                  ))}
                </div>
                <h5 style={{ margin: '10px 0' }}>Colors</h5>
                <div style={{ display: 'flex' }}>
                  {product.availableSizes.map((sizes) => {
                    sizes.stocks.map((stock) => (
                      <div
                        key={stock.color}
                        style={{
                          backgroundColor: `${stock.hex}`,
                          width: '20px',
                          height: '20px',
                          border: '1px solid black',
                        }}
                      >
                        {stock.color}
                      </div>
                    ));
                  })}
                </div>

                <div
                  className="button"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <h4>Quantity</h4>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RemoveIcon
                      onClick={decrement}
                      className={(numOfPurchase === 1 && classes.disabled, classes.removeBtn)}
                      style={{ cursor: 'pointer' }}
                    ></RemoveIcon>
                    <span style={{ margin: '10px 20px ' }}>{numOfPurchase}</span>
                    <AddIcon
                      onClick={() => setNumOfPurchase((prevNum) => (prevNum += 1))}
                      style={{
                        padding: '5px',
                        backgroundColor: 'black',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                    ></AddIcon>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    onClick={() => addToCart(product)}
                    variant="outlined"
                    style={{
                      color: 'black',
                      marginRight: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ShoppingBasketIcon
                      style={{ marginRight: '5px', width: '20px', height: '20px' }}
                    />
                    <p>Add To Cart</p>
                  </Button>
                  <Button
                    onClick={checkout}
                    variant="contained"
                    style={{ backgroundColor: 'black', color: 'white' }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <h3
              onClick={() => setActiveTab(0)}
              className={activeTab === 0 && classes.activeTab}
              style={{
                cursor: 'pointer',
                fontSize: ' 16px',
                margin: '10px 20px 0 0px',
                color: 'gray',
              }}
            >
              Description
            </h3>
            <h3
              onClick={() => setActiveTab(1)}
              className={activeTab === 1 && classes.activeTab}
              style={{ cursor: 'pointer', fontSize: ' 16px', margin: '10px 0', color: 'gray' }}
            >
              Reviews
            </h3>
          </div>
          <div>
            {activeTab === 0 ? (
              <p style={{ fontSize: '14px' }}>{product.description}</p>
            ) : (
              <p style={{ fontSize: '14px' }}>{product.reviews}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
