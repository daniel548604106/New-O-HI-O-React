import React from 'react';
import classes from './ShopCard.module.scss';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
const ShopCard = ({ shop }) => {
  return (
    <div className={classes.shopCardLayout}>
      <div className={classes.profileImageLayout}>
        <div className={classes.mainImage}>
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className={classes.restImages}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.textLayout}>
        <div>
          <p className={classes.shopName}>{shop.name}</p>
          <p className={classes.followers}>
            Followers <span>{shop.followers}</span>
          </p>
        </div>
        <button>
          <AddIcon />
          <span>Follow</span>
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.object,
};

export default ShopCard;
