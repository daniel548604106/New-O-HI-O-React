import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './MainContent.module.scss';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
const MainContent = ({ activeCategory, products, categoryId, subcategoryId }) => {
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
    console.log(products);
  }, [activeCategory, subcategoryId]);
  return (
    <>
      <div className={classes.topRow}>
        <div>{activeCategory ? <h2>{activeCategory.title}</h2> : <h2>今日熱門商品</h2>}</div>
        <div className={classes.filter}>
          <label htmlFor="">排序</label>
          <select name="sort" id="sort">
            <option value="popular">熱門程度優先</option>
            <option value="high-low">價格由高至低</option>
            <option value="low-high">價格由低至高</option>
          </select>
        </div>
      </div>
      <div className={classes.products}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

MainContent.propTypes = {
  categoryId: PropTypes.string,
  activeCategory: PropTypes.arrays,
  subcategoryId: PropTypes.number,
  products: PropTypes.array,
};

export default MainContent;
