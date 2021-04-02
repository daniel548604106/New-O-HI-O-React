import React, { useEffect } from 'react';
import classes from './Sidebar.module.scss';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  const query = qs.parse(location.search);
  const changeSearchType = (id) => {
    query['find'] = id;
    location.search = qs.stringify(query);
  };

  const searchType = [
    {
      name: '設計商品',
      id: 'product',
    },
    {
      name: '設計商店',
      id: 'shop',
    },
  ];
  return (
    <div className={classes.sidebar}>
      <p className={classes.title}>你正在搜尋</p>
      <div className={classes.type}>
        {searchType.map((type) => (
          <p onClick={() => changeSearchType(type.id)} key={type.name}>
            {type.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
