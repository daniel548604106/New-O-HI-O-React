import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { menuOptions } from '../../../lib/menuOptions';
import classes from './Sidebar.module.scss';
const Sidebar = ({ categoryId }) => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState([]);
  useEffect(() => {
    const active = () => {
      const category = menuOptions.find((option) => {
        return option.id === +categoryId;
      });
      setActiveCategory(category);
    };
    active();
  }, [categoryId]);

  return (
    <div className={classes.browseCategories}>
      {window.innerWidth > 500 && <h2 className={classes.title}>商品分類</h2>}
      {categoryId ? (
        <>
          <Link to={`/browse`} className={classes.back}>
            <ChevronLeftIcon />
            <span className={classes.options}>所有分類</span>
          </Link>
          <div>
            {activeCategory &&
              activeCategory.category.map((category) => (
                <Link
                  key={category.id}
                  to={`${location.pathname}?category=${categoryId}&subcategory=${category.id}`}
                >
                  <p className={classes.options}>{category.name}</p>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <div className={classes.categories}>
          {menuOptions.map((option) => (
            <>
              <Link to={`/browse?category=${option.id}`} key={option.id}>
                <p className={classes.options}>{option.title}</p>
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  categoryId: PropTypes.string,
};

export default Sidebar;
