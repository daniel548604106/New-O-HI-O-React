import React from 'react';
import classes from './Shop.module.scss';
import Banner from '../../components/Shop/Banner/Banner.jsx';
import ShopInfo from '../../components/Shop/ShopInfo/ShopInfo.jsx';
import Tabs from '../../components/Global/Tabs/Tabs.jsx';
import RecommendedDesign from '../../components/Shop/RecommendedDesign/RecommendedDesign.jsx';
import ProductList from '../../components/Shop/ProductList/ProductList.jsx';
import Sidebar from '../../components/Shop/Sidebar/Sidebar.jsx';
const tabs = [
  {
    name: '商品',
    location: 'product',
  },
  {
    name: '設計管故事',
    location: 'story',
  },
  {
    name: '退換貨政策',
    location: 'policy',
  },
];
const Shop = () => {
  return (
    <div>
      SHop
      <Banner />
      <ShopInfo />
      <Tabs tabs={tabs} />
      <RecommendedDesign />
      <div className={classes.productsRow}>
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
