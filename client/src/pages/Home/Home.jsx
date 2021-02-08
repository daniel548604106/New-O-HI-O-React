import React, { useEffect, useState } from 'react';
import Banner from '../../components/Home/Banner/Banner.jsx';
import Campaign from '../../components/Home/Campaign/Campaign.jsx';
import Shop from '../../components/Home/Shops/Shops.jsx';
import Cards from '../../components/Home/Cards/Cards.jsx';
import Subscription from '../../components/Home/Subscription/Subscription.jsx';
import {
  apiGetAllProducts,
  apiGetDiscountedProducts,
  apiGetBanners,
  apiGetHotShop,
} from '../../api/index';
import classes from './Home.module.scss';
import { getFavList } from '../../store/index/indexAction';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [hotShops, setHotShops] = useState([]);
  const [banners, setBanners] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // 取得 Banners

  const getBanners = async () => {
    const { data } = await apiGetBanners();
    console.log('banners', data);
    setBanners(data.banners);
  };

  const getHotShop = async () => {
    try {
      const { data } = await apiGetHotShop();
      setHotShops(data.shop);
    } catch (error) {
      console.log(error);
    }
  };

  //取得 Products

  const getAllProducts = async () => {
    try {
      const { data } = await apiGetAllProducts();
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //取得精選優惠
  const getDiscountedProducts = async () => {
    try {
      const { data } = await apiGetDiscountedProducts();
      console.log('discounted', data);
      setDiscountedProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBanners();
    getAllProducts();
    getHotShop();
    getDiscountedProducts();
  }, []);

  useEffect(() => {
    const fetchFavProducts = async () => {
      try {
        const token = Cookie.get('token');
        dispatch(getFavList(token));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavProducts();
  }, [dispatch]);
  return (
    <div>
      <Banner banners={banners} />
      <main>
        <section>
          <Cards title="newRelease" products={products} t={t} />
        </section>
        <section>
          <Cards title="popularItems" products={products} t={t} />
        </section>
        <div className={classes.campaign}>
          <Campaign products={products} t={t} />
        </div>
        <section>
          <Shop t={t} shops={hotShops} />
        </section>
        <section>
          <Cards title="discountedItems" products={discountedProducts} t={t} />
        </section>
        <section style={{ width: '100%' }}>
          <Subscription t={t} />
        </section>
      </main>
    </div>
  );
};

export default Home;
