import React, { useEffect, useState } from 'react';
import classes from './Search.module.scss';
import Content from '../../components/Search/Content/Content.jsx';
import { useLocation } from 'react-router-dom';
import { apiGetSearchedProducts } from '../../api/index';
import notify from '../../lib/notification';
const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchInput = query.get('keyword');
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    const getSearchedProducts = async (text) => {
      try {
        const { data } = await apiGetSearchedProducts(text);
        setSearchedProducts(data.result);
      } catch (error) {
        notify('很抱歉，取得搜尋商品失敗');
      }
    };
    getSearchedProducts(searchInput);
  }, [searchInput]);

  return (
    <div className={classes.search}>
      <div className={classes.content}>
        <Content searchedProducts={searchedProducts} />
      </div>
    </div>
  );
};

export default Search;
