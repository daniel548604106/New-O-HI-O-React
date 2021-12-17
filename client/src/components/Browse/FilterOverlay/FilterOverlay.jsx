import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { menuOptions, priceOptions } from '../../../lib/menuOptions';
import classes from './FilterOverlay.module.scss';
const FilterOverlay = ({ setFilterShow }) => {
  const [activeFilter, setActiveFilter] = useState(-1);
  const handleActiveFilter = (idx) => {
    activeFilter === idx ? setActiveFilter(-1) : setActiveFilter(idx);
  };
  const filterOptions = [
    {
      title: '商品分類',
      options: [...menuOptions],
    },
    {
      title: '金額',
      options: [...priceOptions],
    },
  ];
  return (
    <div className={classes.filterOverlay}>
      <div className={classes.header}>
        <span onClick={() => setFilterShow(false)} className={classes.back}>
          <ChevronLeftIcon />
          返回
        </span>
        <span className={classes.reselect}>重設篩選</span>
      </div>
      <div className={classes.body}>
        <h3 className={classes.title}>縮小商品顯示範圍:</h3>
        <div>
          {filterOptions.map(({ title, options }, index) => (
            <div key={title}>
              <div onClick={() => handleActiveFilter(index)} className={classes.filterTitle}>
                <span>{title}</span>
                <div className={`${classes.expand} ${activeFilter === index && classes.active}`}>
                  <ExpandMoreIcon />
                </div>
              </div>
              {activeFilter === index && (
                <div>
                  {options.map((option) => (
                    <div key={option.title}>{option.title}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FilterOverlay.propTypes = {
  setFilterShow: PropTypes.func,
};

export default FilterOverlay;
