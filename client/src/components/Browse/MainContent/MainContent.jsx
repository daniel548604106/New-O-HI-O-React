import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './MainContent.module.scss';
import { useLocation } from 'react-router-dom';
const MainContent = ({ activeCategory, categoryId, subcategoryId }) => {
  const location = useLocation();
  const [activeSubcategory, setActiveSubcategory] = useState([]);
  useEffect(() => {
    let subcategory;
    if (activeCategory && subcategoryId) {
      subcategory = activeCategory.category.find((option) => {
        return option.id === subcategoryId;
      });
    }
    console.log(subcategory);
  }, [activeCategory, subcategoryId]);
  return (
    <>
      <div>{activeCategory ? <h2>{activeCategory.title}</h2> : <h2>今日熱門商品</h2>}</div>
    </>
  );
};

MainContent.propTypes = {
  categoryId: PropTypes.string,
  activeCategory: PropTypes.arrays,
  subcategoryId: PropTypes.number,
};

export default MainContent;
