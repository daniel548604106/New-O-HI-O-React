import React, { useState, useEffect } from 'react';
import classes from './Favorite.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { apiGetFavList } from '../../api/index';
import ProductCard from '../../components/Global/ProductCard/ProductCard.jsx';
import { useSelector } from 'react-redux';
import ShopCard from '../../components/Global/ShopCard/ShopCard.jsx';
import Tabs from '../../components/Global/Tabs/Tabs.jsx';
import Empty from '../../components/Global/Empty/Empty.jsx';
const Favorite = () => {
  const history = useHistory();
  const location = useLocation();
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const [showProducts, setShowProducts] = useState(true);

  const tabs = [
    {
      name: '商品',
      location: 'products',
    },
    {
      name: '專注的設計館',
      location: 'shops',
    },
  ];

  useEffect(() => {
    location.search.includes('products') ? setShowProducts(true) : setShowProducts(false);
    console.log(location);
  }, [location, favoriteProducts]);
  return (
    <div>
      <h2 className={classes.title}>慾望清單</h2>
      <Tabs tabs={tabs} />
      <hr />

      <div className={classes.favorites}>
        {showProducts ? (
          <div className={favoriteProducts.length && classes.productsRow}>
            {favoriteProducts && favoriteProducts.length ? (
              favoriteProducts.map((product) => <ProductCard key={product._id} product={product} />)
            ) : (
              <Empty title="你的慾望清單目前是空的喔！" />
            )}
          </div>
        ) : (
          <div className={classes.shopsRow}>
            {favoriteShops && favoriteShops.length ? (
              favoriteShops.map((shop) => <ShopCard key={shop._id} shop={shop}></ShopCard>)
            ) : (
              <Empty title="你目前尚未關注任何設計館喔！" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
