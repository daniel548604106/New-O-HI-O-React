import React from 'react';
import classes from './Search.module.scss';
import Sidebar from '../../components/Search/Sidebar/Sidebar.jsx';
import Content from '../../components/Search/Content/Content.jsx';
const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <Content />
      </div>
    </div>
  );
};

export default Search;
