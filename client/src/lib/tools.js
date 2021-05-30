export const formatDate = (date) => {
  return date.slice(0, 10);
};

export const discount = (product) => {
  return product.discountPrice / product.fullPrice > 0.1
    ? `${Math.floor((product.discountPrice / product.fullPrice) * 10)}折`
    : `${Math.ceil((product.discountPrice / product.fullPrice) * 10)}折`;
};
