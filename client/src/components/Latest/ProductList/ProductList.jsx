import PropTypes from 'prop-types';
import React from 'react';

import ProductCard from '../../Global/ProductCard/ProductCard.jsx';
import Tags from '../../Global/Tags/Tags.jsx';
import MobileFilter from '../MobileFilter/MobileFilter.jsx';
import styles from './ProductList.module.scss';
const ProductList = ({ products }) => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <MobileFilter />
        </div>
        <div className={styles.sort}>
          <div>
            <p>Sort by:</p>
            <select name="sort" id="sort" className={styles.select}>
              <option value="newest">Newest</option>
              <option value="price">Price</option>
            </select>
          </div>
          <p>2800 items</p>
        </div>
        <div className={styles.tagRow}>
          <div className={styles.tagsRowOverFlow}>
            {tags.map((tag) => (
              <div key={tag} style={{ marginRight: '10px' }}>
                <Tags tag={tag} />
              </div>
            ))}
          </div>
          <button className={styles.clearBtn}>Clear All</button>
        </div>
        <div className={styles.gridContainer}>
          {products.map((product) => (
            <div key={product._id}>
              <ProductCard collection={'beauty'} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
