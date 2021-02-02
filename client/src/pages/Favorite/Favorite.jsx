import React, { useState, useEffect } from 'react';
import classes from './Favorite.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { apiGetFavList } from '../../api/index';
import ProductCard from '../../components/Global/ProductCard/ProductCard.jsx';
import { useSelector } from 'react-redux';
import ShopCard from '../../components/Global/ShopCard/ShopCard.jsx';
const Favorite = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const toProducts = () => {
    history.push('/favorite/products');
    setActiveTab(0);
  };
  const toShops = () => {
    history.push('/favorite/shops');
    setActiveTab(1);
  };

  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    location.pathname.includes('products') ? setShowProducts(true) : setShowProducts(false);
    console.log(location);
  }, [location, favoriteProducts]);
  return (
    <div>
      <h2 className={classes.title}>慾望清單</h2>
      <div className={classes.list}>
        <div onClick={() => toProducts()} className={activeTab === 0 && classes.active}>
          商品
        </div>
        <div onClick={() => toShops()} className={activeTab === 1 && classes.active}>
          關注的設計館
        </div>
      </div>
      <hr />
      <div className={classes.favorites}>
        {showProducts ? (
          <div className={classes.productsRow}>
            {favoriteProducts &&
              favoriteProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        ) : (
          <div className={classes.shopsRow}>
            {favoriteShops &&
              favoriteShops.map((shop) => <ShopCard key={shop._id} shop={shop}></ShopCard>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
