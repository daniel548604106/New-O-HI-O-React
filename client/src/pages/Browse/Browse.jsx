import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Browse/Sidebar/Sidebar.jsx';
import MainContent from '../../components/Browse/MainContent/MainContent.jsx';
import classes from './Browse.module.scss';
import PropTypes from 'prop-types';
import { menuOptions } from '../../lib/allCategories';
import { useLocation } from 'react-router-dom';
import { apiGetAllProducts } from '../../api/index';
const Browse = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [activeCategory, setActiveCategory] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setCategoryId(query.get('category'));
    setSubcategoryId(Number(query.get('subcategory')));
    console.log(location.search, query.get('category'));
  }, [query]);

  useEffect(() => {
    const active = () => {
      const category = menuOptions.find((option) => {
        return option.id === +categoryId;
      });
      setActiveCategory(category);
      console.log(category, categoryId);
    };

    active();
  }, [categoryId]);
  // Get Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await apiGetAllProducts();
        setProducts(products.data.products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className={classes.browseLayout}>
      <div className={classes.sideBar}>
        <Sidebar categoryId={categoryId} />
      </div>
      <div className={classes.mainContent}>
        <MainContent
          categoryId={categoryId}
          activeCategory={activeCategory}
          subcategoryId={subcategoryId}
          products={products}
        />
      </div>
    </div>
  );
};

export default Browse;