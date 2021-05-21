import React, { useEffect, useState } from 'react';
import ProductList from '../../components/Latest/ProductList/ProductList.jsx';
import SidebarFilter from '../../components/Latest/SidebarFilter/SidebarFilter.jsx';
import styles from './index.module.scss';
import { apiGetAllProducts } from '../../api/index';

const Latest = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await apiGetAllProducts();
      setProducts(data.products);
    };
    getAllProducts();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Arrivals</h1>
      <div className={styles.layout}>
        <div style={{ flex: 1, maxWidth: '20vw', minWidth: '250px' }} className={styles.sidebar}>
          <SidebarFilter />
        </div>
        <div style={{ flex: 3 }}>
          <ProductList style={{ flex: 1 }} products={products} />
        </div>
      </div>
    </div>
  );
};

export default Latest;
