import React from 'react';
import Skeleton from 'react-loading-skeleton';
const ProductCardLoading = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div style={{ display: 'flex', overflow: 'auto' }}>
      {array.map((index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', marginRight: '15px' }}>
          <Skeleton height={150} width={150} />
          <Skeleton height={10} width={120} style={{ marginTop: '10px' }} />
          <Skeleton height={10} width={100} />
        </div>
      ))}
    </div>
  );
};

export default ProductCardLoading;
