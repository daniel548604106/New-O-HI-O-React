import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Browse/SideBar/SideBar.jsx';
import MainContent from '../../components/Browse/MainContent/MainContent.jsx';
import FilterOverlay from '../../components/Browse/FilterOverlay/FilterOverlay.jsx';
import classes from './Browse.module.scss';
import { useHistory } from 'react-router-dom';
import { menuOptions } from '../../lib/menuOptions';
import { useLocation } from 'react-router-dom';
import { apiGetAllProducts } from '../../api/index';
import qs from 'query-string';
const Browse = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [activeCategory, setActiveCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filterShow, setFilterShow] = useState(false);
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
    let query = qs.parse(location.search);
    query = { ...query, page: currentPage };
    history.push(`${location.pathname}?${qs.stringify(query)}`);
    const getProducts = async () => {
      try {
        const products = await apiGetAllProducts(qs.stringify(query));
        setProducts(products.data.products);
        setTotalPage(products.data.totalPage);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    console.log(currentPage);
  }, [currentPage, location.search]);
  return (
    <div className={classes.browseLayout}>
      <div className={`${classes.filterLayout}  ${filterShow && classes.active}`}>
        <FilterOverlay setFilterShow={setFilterShow} />
      </div>
      <div className={classes.sideBar}>
        <Sidebar categoryId={categoryId} />
      </div>
      <div className={classes.mainContent}>
        <MainContent
          setFilterShow={setFilterShow}
          currentPage={currentPage}
          totalPage={totalPage}
          categoryId={categoryId}
          setCurrentPage={setCurrentPage}
          activeCategory={activeCategory}
          subcategoryId={subcategoryId}
          products={products}
        />
      </div>
    </div>
  );
};

export default Browse;
