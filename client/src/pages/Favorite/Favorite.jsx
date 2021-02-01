import React, { useState, useEffect } from 'react';
import classes from './Favorite.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { apiGetFavProducts } from '../../api/index';
import ProductCard from '../../components/Global/ProductCard/ProductCard.jsx';
import { useSelector } from 'react-redux';
import Cookie from 'js-cookie';
const Favorite = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [favProducts, setFavProducts] = useState([]);
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const toProducts = () => {
    history.push('/favorite/products');
    setActiveTab(0);
  };
  const toShops = () => {
    history.push('/favorite/shops');
    setActiveTab(1);
  };

  useEffect(() => {
    const getFavProducts = async () => {
      const token = Cookie.get('token');
      console.log(token);
      const { data } = await apiGetFavProducts(token);
      setFavProducts(data.userFavList.favoriteItems);
    };
    getFavProducts();
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
        <div className={classes.productsRow}>
          {favProducts ? (
            favProducts.map((product) => <ProductCard key={product._id} product={product} />)
          ) : (
            <h1>目前沒有任何收藏</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
