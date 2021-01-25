import React from 'react';
import Dropdown from '../../Global/Dropdown/Dropdown.jsx';
import PropTypes from 'prop-types';
const ProductDescription = ({ product }) => {
  return (
    <div>
      <div className="description">
        <Dropdown title="Product Description" product={product} />
      </div>
      <div className="description">
        <Dropdown title="Tags" product={product} />
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
