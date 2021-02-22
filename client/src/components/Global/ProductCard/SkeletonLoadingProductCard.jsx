import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoadingProductCard = () => {
  return (
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <Skeleton />
      <Skeleton width={100} height={30} count={1} />
    </div>
  );
};

export default SkeletonLoadingProductCard;
