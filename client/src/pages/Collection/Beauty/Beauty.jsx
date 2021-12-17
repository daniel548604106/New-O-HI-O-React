import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { apiGetCollectionProducts } from '../../../api/index';
import ProductCard from '../../../components/Global/ProductCard/ProductCard.jsx';
const Beauty = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await apiGetCollectionProducts('beauty');
      setProducts(data.products);
    };
    getAllProducts();
  }, []);
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Beauty</h1>
      <Grid container>
        <Grid container item xs={3}>
          <div style={{ display: 'flex' }}>
            {products.map((product) => (
              <ProductCard key={product._id} collection={'beauty'} product={product} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Beauty;
