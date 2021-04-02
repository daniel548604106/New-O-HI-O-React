import React, { useState } from 'react';
import classes from './Content.module.scss';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
import Button from '../../Global/Button/Button.jsx';
import { useHistory, browseHistory } from 'react-router-dom';
const Content = ({ searchedProducts, searchInput }) => {
  const history = useHistory();
  const [selectedValue, setSelectedValue] = useState('popularity');
  const directTo = (page) => {
    history.push(page);
  };
  return (
    <>
      {searchedProducts ? (
        <div className={classes.topRow}>
          <p>找到 {searchedProducts.length} 件 商品</p>
          <div className={classes.sort}>
            <span>排序</span>
            <pre>{searchedProducts}</pre>
            <select value={selectedValue} name="sort" id="sort">
              <option value="popularity">最熱門選項</option>
              <option value="high-low">價格由高到低</option>
              <option value="low-high">價格由低到高</option>
              <option value="latest">最新上架</option>
            </select>
          </div>
          {searchedProducts.map((product) => {
            <ProductCard product={product} />;
          })}
        </div>
      ) : (
        <div className={classes.notFound}>
          <p className={classes.noResult}>
            找不到與 <span>{searchInput}</span> 有關的結果
          </p>
          <div onClick={() => history.goBack()}>
            <Button text="返回上一頁" />
          </div>
          <p className={classes.alternatives}>
            你也可以: <span onClick={() => directTo('browse')}>直接逛設計</span>
            <span onClick={() => directTo('wall')}>找更多靈感</span>
          </p>
          <div onClick={() => directTo('giftguides')} className={classes.adImage}></div>
        </div>
      )}
    </>
  );
};

Content.propTypes = {
  searchedProducts: PropTypes.array,
  searchInput: PropTypes.string,
};

export default Content;
