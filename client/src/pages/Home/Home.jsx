import React, { useEffect, useState } from 'react';
import Banner from '../../components/Home/Banner/Banner.jsx';
import DiscountedItems from '../../components/Home/DiscountedItems/DiscountedItems.jsx';
import NewItems from '../../components/Home/NewItems/NewItems.jsx';
import Campaign from '../../components/Home/Campaign/Campaign.jsx';
import PopularItems from '../../components/Home/PopularItems/PopularItems.jsx';
import Shop from '../../components/Home/Shops/Shops.jsx';
import Subscription from '../../components/Home/Subscription/Subscription.jsx';
import { apiGetAllProducts, apiGetBanners } from '../../api/index';
import classes from './Home.module.scss';
import { getFavProducts } from '../../store/index/indexAction';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // 取得 Banners
  useEffect(() => {
    const getBanners = async () => {
      const { data } = await apiGetBanners();
      console.log('banners', data);
      setBanners(data.banners);
    };
    getBanners();
  }, []);

  //取得 Products
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await apiGetAllProducts();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const fetchFavProducts = async () => {
      try {
        const token = Cookie.get('token');
        dispatch(getFavProducts(token));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavProducts();
  }, []);
  return (
    <div>
      <Banner banners={banners} />
      <main>
        <section>
          <NewItems products={products} t={t} />
        </section>
        <section>
          <PopularItems products={products} t={t} />
        </section>
        <div className={classes.campaign}>
          <Campaign products={products} t={t} />
        </div>
        <section>
          <Shop t={t} />
        </section>
        <section>
          <DiscountedItems products={products} t={t} />
        </section>
        <section style={{ width: '100%' }}>
          <Subscription t={t} />
        </section>
      </main>
    </div>
  );
};

export default Home;
