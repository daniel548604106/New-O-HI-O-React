import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Divider } from '@material-ui/core';
import { product } from '../../../lib/fakeData';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px',
    maxWidth: '1000px',
    display: 'block',
    [theme.breakpoints.up('800')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    margin: '0 auto',
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
  activeTab: {
    color: 'black',
    fontWeight: 500,
  },
}));

const Product = () => {
  const classes = useStyles();
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={classes.root}>
      <div
        className="carousel"
        style={{
          width: '100%',
          position: 'relative',
          margin: '0 auto',
          maxWidth: '700px',
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
      <div style={{ flex: 1 }}>
        <h3 style={{ width: '90%', marginTop: '10px' }}>{product.name}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            <StarIcon style={{ width: '20px', height: '20px', color: '#f0d90a' }} />
            <p style={{ fontSize: '14px' }}>
              {product.ratings} <span style={{ color: 'gray' }}>({product.numOfRatings})</span>
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
          <div style={{ display: 'flex' }}>
            <h3
              onClick={() => setActiveTab(0)}
              className={activeTab === 0 ? classes.activeTab : null}
              style={{ fontSize: ' 16px', margin: '10px 20px 0 0px', color: 'gray' }}
            >
              Description
            </h3>
            <h3
              onClick={() => setActiveTab(1)}
              className={activeTab === 1 && classes.activeTab}
              style={{ fontSize: ' 16px', margin: '10px 0', color: 'gray' }}
            >
              Reviews
            </h3>
          </div>
          {activeTab === 0 ? (
            <p style={{ fontSize: '14px' }}>{product.description}</p>
          ) : (
            <p style={{ fontSize: '14px' }}>{product.reviews}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
