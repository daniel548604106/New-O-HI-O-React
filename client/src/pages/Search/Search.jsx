import React, { useEffect, useState } from 'react';
import classes from './Search.module.scss';
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
        setSearchedProducts(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedProducts(searchInput);
  }, [search]);

  return (
    <div className={classes.search}>
      <div className={classes.content}>
        <Content searchedProducts={searchedProducts} searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Search;
