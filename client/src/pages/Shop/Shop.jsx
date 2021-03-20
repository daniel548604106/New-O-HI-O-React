import React, { useEffect, useState } from 'react';
import classes from './Shop.module.scss';
import Banner from '../../components/Shop/Banner/Banner.jsx';
import ShopInfo from '../../components/Shop/ShopInfo/ShopInfo.jsx';
import Tabs from '../../components/Global/Tabs/Tabs.jsx';
import RecommendedDesign from '../../components/Shop/RecommendedDesign/RecommendedDesign.jsx';
import ProductList from '../../components/Shop/ProductList/ProductList.jsx';
import Sidebar from '../../components/Shop/Sidebar/Sidebar.jsx';
import RefundPolicy from '../../components/Shop/RefundPolicy/RefundPolicy.jsx';
import { apiGetShopProducts, apiGetShopInfo } from '../../api/index';
import { useLocation, useParams } from 'react-router-dom';

const tabs = [
  {
    name: '商品',
    location: 'product',
  },
  {
    name: '設計館故事',
    location: 'story',
  },
  {
    name: '退換貨政策',
    location: 'policy',
  },
];
const Shop = () => {
  const location = useLocation();
  const params = useParams();
  const [shopInfo, setShopInfo] = useState({});

  useEffect(() => {
    const { data } = apiGetShopProducts(params.account);
    const { account } = params;

    const getShopInfo = async () => {
      try {
        const { data } = await apiGetShopInfo(account);
        setShopInfo(data.shop);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getShopInfo();
  }, []);
  return (
    <div>
      <Banner shop={shopInfo} />
      <div className={classes.mainContent}>
        <ShopInfo shop={shopInfo} />
        <Tabs tabs={tabs} />

        {location.search.includes('product') && (
          <div className={classes.product}>
            <RecommendedDesign pinnedProducts={shopInfo.pinnedProducts} />
            <div className={classes.productsRow}>
              <Sidebar />
              <div className={classes.productList}>
                <ProductList products={shopInfo.products} />
              </div>
            </div>
          </div>
        )}
        {location.search.includes('story') && (
          <div className={classes.story}>
            <p>{shopInfo.story}</p>
          </div>
        )}
        <div className={classes.policy}>
          {location.search.includes('policy') && <RefundPolicy />}
        </div>
      </div>
    </div>
  );
};

export default Shop;