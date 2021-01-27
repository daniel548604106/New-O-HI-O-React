import React, { useEffect, useState } from 'react';
import Banner from '../../components/Home/Banner/Banner.jsx';
import DiscountedItems from '../../components/Home/DiscountedItems/DiscountedItems.jsx';
import NewItems from '../../components/Home/NewItems/NewItems.jsx';
import Campaign from '../../components/Home/Campaign/Campaign.jsx';
import PopularItems from '../../components/Home/PopularItems/PopularItems.jsx';
import Shop from '../../components/Home/Shops/Shops.jsx';
import Subscription from '../../components/Home/Subscription/Subscription.jsx';
import { apiGetAllProducts } from '../../api/index';
import classes from './Home.module.scss';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
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
  return (
    <div>
      <Banner />
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
