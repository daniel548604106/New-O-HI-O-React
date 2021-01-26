import React, { useEffect, useState } from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Sale from '../../components/Home/Sale/Sale';
import Viewed from '../../components/Home/Viewed/Viewed';
import Shop from '../../components/Home/Shops/Shops.jsx';
import Subscription from '../../components/Home/Subscription/Subscription.jsx';
import { apiGetAllProducts } from '../../api/index';
import classes from './Home.module.scss';
const Home = () => {
  const [products, setProducts] = useState([]);
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
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px' }}>
        <section>
          <Sale products={products} />
        </section>
        <section>
          <Viewed />
        </section>
        <section>
          <Shop />
        </section>
        <div style={{ width: '100%' }}>
          <Subscription />
        </div>
      </main>
    </div>
  );
};

export default Home;
