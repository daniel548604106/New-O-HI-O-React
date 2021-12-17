import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import FavoriteCard from '../../components/Favorite/FavoriteCard.jsx';
import Empty from '../../components/Global/Empty/Empty.jsx';
import ShopCard from '../../components/Global/ShopCard/ShopCard.jsx';
import Tabs from '../../components/Global/Tabs/Tabs.jsx';
import classes from './Favorite.module.scss';
const Favorite = () => {
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
  }, [location, favoriteProducts]);
  return (
    <div>
      <h2 className={classes.title}>慾望清單</h2>
      <Tabs tabs={tabs} />
      <hr />

      <div className={classes.favorites}>
        {showProducts ? (
          <div className={favoriteProducts && favoriteProducts.length && classes.productsRow}>
            {favoriteProducts && favoriteProducts.length ? (
              favoriteProducts.map((product) => (
                <FavoriteCard key={product._id} product={product} />
              ))
            ) : (
              <Empty title="你的慾望清單目前是空的喔！" />
            )}
          </div>
        ) : (
          <div className={favoriteShops && favoriteShops.length && classes.shopsRow}>
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
