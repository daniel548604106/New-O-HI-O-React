import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Browse/Sidebar/Sidebar.jsx';
import MainContent from '../../components/Browse/MainContent/MainContent.jsx';
import classes from './Browse.module.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
const Browse = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [categoryId, setCategoryId] = useState('');
  useEffect(() => {
    setCategoryId(query.get('category'));
    console.log(categoryId);
    console.log(location.search, query.get('category'));
  }, [query]);
  return (
    <div className={classes.browseLayout}>
      <div className={classes.sideBar}>
        <Sidebar categoryId={categoryId} />
      </div>
      <div className={classes.mainContent}>
        <MainContent />
      </div>
    </div>
  );
};

export default Browse;
