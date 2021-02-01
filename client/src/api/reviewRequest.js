import axios from 'axios';

const getReviews = async (productId) => {
  return await axios.get(`/v1/reviews/${productId}`);
};

export { getReviews };
