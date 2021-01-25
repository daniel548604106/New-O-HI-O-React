import React from 'react';
import classes from './DesignShopInfo.module.scss';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
const DesignShopInfo = () => {
  return (
    <div>
      <div className={classes.designShopRoot}>
        <h2>About Design Shop</h2>
        <div className={classes.designShopLayout}>
          <img
            className={classes.designShopLogo}
            src="https://images.unsplash.com/photo-1611525933351-1d340d202465?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div>
            <p>KENZO</p>
            <StarIcon />
          </div>
        </div>
        <div className={classes.ctaBtnRow}>
          <button className={classes.follow}>
            <AddIcon />
            <p>加入關注</p>
          </button>
          <button className={classes.contact}>
            <p>聯絡店家</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignShopInfo;
