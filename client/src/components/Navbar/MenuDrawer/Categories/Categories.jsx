import React, { useState } from 'react';
import classes from './Categories.module.scss';
import { menuOptions } from '../../../../lib/menuOptions';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(-1);
  const handleCategorySwitch = (e, index) => {
    e.stopPropagation();
    activeCategory === index ? setActiveCategory(-1) : setActiveCategory(index);
  };
  return (
    <div>
      {menuOptions.map((option, index) => (
        <div key={option.title}>
          <div className={classes.optionsLayout} onClick={(e) => handleCategorySwitch(e, index)}>
            <p>{option.title}</p>
            <ChevronRightIcon
              className={`${classes.icon} ${activeCategory === index ? classes.active : ''}`}
            />
          </div>
          {option.category.map((category) => (
            <div
              className={`${classes.subcategory} ${activeCategory === index ? classes.active : ''}`}
              key={category.id}
            >
              {category.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
