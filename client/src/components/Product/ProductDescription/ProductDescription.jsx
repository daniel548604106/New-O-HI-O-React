import React from 'react';
import Dropdown from '../../Global/Dropdown/Dropdown.jsx';
import PropTypes from 'prop-types';
import Stars from '../../Global/Stars/Stars.jsx';
import classes from './ProductDescription.module.scss';
const ProductDescription = ({ product }) => {
  return (
    <div>
      <div className="description">
        <Dropdown title="Product Description" product={product} />
      </div>
      <div className="description">
        <Dropdown title="Tags" product={product} />
      </div>
      <div>
        <h2>購買評價</h2>
        <hr />
        <div className={classes.feedbackRow}>
          <div className={classes.feedbackRow}>
            <img
              src="https://images.unsplash.com/photo-1611518296156-a7ffe218692a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div>
              <div className={classes.topRow}>
                <p className={classes.name}>
                  <span>Daniel Yeh</span> 在一週前所留下的評價
                </p>
                <div className={classes.starRow}>
                  <Stars />
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae similique, eaque,
                quasi aperiam aspernatur culpa voluptate repudiandae repellendus asperiores officiis
                eligendi reiciendis incidunt harum maiores nobis laborum tenetur omnis earum animi
                dicta unde, totam modi. Velit molestiae consequatur accusantium asperiores!
              </p>
              <img
                src="https://images.unsplash.com/photo-1611522377978-a2f38e639a41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
