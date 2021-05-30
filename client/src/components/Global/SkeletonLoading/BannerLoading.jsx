import React from 'react';
import Skeleton from 'react-loading-skeleton';

const BannerLoading = () => {
  return (
    <div>{window.innerWidth < 500 ? <Skeleton height={200} /> : <Skeleton height={500} />}</div>
  );
};

export default BannerLoading;
