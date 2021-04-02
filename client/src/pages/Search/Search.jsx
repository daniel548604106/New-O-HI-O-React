import React, { useEffect, useState } from 'react';
import classes from './Search.module.scss';
import Sidebar from '../../components/Search/Sidebar/Sidebar.jsx';
import Content from '../../components/Search/Content/Content.jsx';
import { useLocation } from 'react-router-dom';
import { apiGetSearchedProducts } from '../../api/index';
const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchInput = query.get('q');
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    console.log(location.search, searchInput);
    const getSearchedProducts = async (text) => {
      try {
        const { data } = await apiGetSearchedProducts(text);
        console.log(data.result);
        // setSearchedProducts(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedProducts(searchInput);
  }, [searchInput]);
  return (
    <div className={classes.search}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <Content products={searchedProducts} searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Search;
