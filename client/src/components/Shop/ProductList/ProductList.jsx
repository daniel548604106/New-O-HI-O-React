import React from 'react';
import classes from './ProductList.module.scss';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import PropTypes from 'prop-types';
const filterTypes = [
  {
    name: '設計館推薦',
    type: 'recommend',
    id: 1,
  },
  {
    name: '熱門程度優先',
    type: 'popularity',
    id: 2,
  },
  {
    name: '最新上架優先',
    type: 'latest',
    id: 3,
  },
  {
    name: '價格優高到低',
    type: 'price',
    orderBy: 'descending',
    id: 4,
  },
  {
    name: '價格優低到高',
    type: 'latest',
    orderBy: 'ascending',
    id: 5,
  },
];
const Filter = () => {
  const location = useLocation();
  const changeFilter = (e) => {
    location.search = `sortby=${e.target.value}`;
  };
  return (
    <div>
      <select onChange={(e) => changeFilter(e)} name="product" id="product">
        {filterTypes.map((types) => (
          <option key={types.id} value={types.type}>
            {types.name}
          </option>
        ))}
      </select>
    </div>
  );
};
const ProductList = ({ products }) => {
  return (
    <div style={{ width: '100%' }}>
      <div className={classes.filter}>
        <Filter />
      </div>
      <div className={classes.productsRow}>
        {products &&
          products.map((product) => (
            <span className={classes.productCard} key={product._id}>
              <ProductCard product={product} />
            </span>
          ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
