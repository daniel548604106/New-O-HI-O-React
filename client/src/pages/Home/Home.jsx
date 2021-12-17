import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  apiGetAllProducts,
  apiGetBanners,
  apiGetDiscountedProducts,
  apiGetHotShop,
  apiGetRecommendedProducts,
} from '../../api/index';
import HelmetTitle from '../../components/Global/HelmetTitle/HelmetTitle.jsx';
import BannerLoading from '../../components/Global/SkeletonLoading/BannerLoading.jsx';
import Banner from '../../components/Home/Banner/Banner.jsx';
import Cards from '../../components/Home/Cards/Cards.jsx';
import Shop from '../../components/Home/Shops/Shops.jsx';
import { getFavList } from '../../store/index/indexAction';
import Product from '../Products/_Product/_Product.jsx';
import classes from './Home.module.scss';

const Home = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [products, setProducts] = useState([]);
  const [hotShops, setHotShops] = useState([]);
  const [banners, setBanners] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  let { id } = useParams();

  // 取得 Banners

  const getBanners = async () => {
    const { data } = await apiGetBanners();
    setBanners(data.banners);
  };

  const getHotShop = async () => {
    try {
      const { data } = await apiGetHotShop();
      setHotShops(data.shop);
    } catch (error) {
      console.log('很抱歉！系統異常，取得熱門商店失敗');
    }
  };

  //取得 Products

  const getAllProducts = async () => {
    try {
      const { data } = await apiGetAllProducts();
      setProducts(data.products);
    } catch (error) {
      console.log('很抱歉，取得商品失敗');
    }
  };

  const getRecommendedProducts = async () => {
    try {
      const { data } = await apiGetRecommendedProducts();
      setRecommendedProducts(data.products);
    } catch (error) {
      console.log('很抱歉，取得推薦商品失敗！');
    }
  };

  //取得精選優惠
  const getDiscountedProducts = async () => {
    try {
      const { data } = await apiGetDiscountedProducts();
      setDiscountedProducts(data.products);
    } catch (error) {
      console.log('很抱歉，取得優惠商品失敗！');
    }
  };

  useEffect(() => {
    getBanners();
    getAllProducts();
    getHotShop();
    getDiscountedProducts();
    getRecommendedProducts();
  }, []);

  useEffect(() => {
    const fetchFavProducts = async () => {
      try {
        const token = Cookie.get('token');
        dispatch(getFavList(token));
      } catch (error) {
        console.log('很抱歉，取得關注的商品失敗！');
      }
    };
    if (isUserLoggedIn) {
      fetchFavProducts();
    }
  }, [dispatch, isUserLoggedIn]);
  return (
    <div className={classes.home}>
      <HelmetTitle />
      {products.length ? <Banner banners={banners} /> : <BannerLoading />}
      {id && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: 'auto' }}
          className={classes.productLayout}
        >
          <Product id={id} key="item" />
        </div>
      )}

      <main>
        <section>
          <Cards id={id} title="editorPicks" showMore={false} products={products} t={t} />
        </section>
        <section>
          <Cards id={id} title="popularItems" link="/browse" products={products} t={t} />
        </section>
        {/* {!isUserLoggedIn && (
          <div className={classes.campaign}>
            <Campaign products={products} t={t} />
          </div>
        )} */}
        <section>
          <Shop t={t} shops={hotShops} />
        </section>
        <section>
          <Cards
            id={id}
            title="discountedItems"
            link="/search?type=discount"
            products={discountedProducts}
            t={t}
          />
        </section>
        <section>
          <Cards
            id={id}
            title="recommendedItems"
            showMore={false}
            products={recommendedProducts}
            t={t}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
