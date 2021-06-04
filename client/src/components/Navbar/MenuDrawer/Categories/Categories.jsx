import React, { useState } from 'react';
import classes from './Categories.module.scss';
import { menuOptions } from '../../../../lib/menuOptions';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Title from '../../../Global/Menu/Title/Title.jsx';
import { useHistory } from 'react-router-dom';
const Categories = () => {
  const history = useHistory();
  const [activeCategory, setActiveCategory] = useState(-1);
  const handleCategorySwitch = (e, index) => {
    e.stopPropagation();
    activeCategory === index ? setActiveCategory(-1) : setActiveCategory(index);
  };
  return (
    <div>
      <Title title="Categories" />
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
              onClick={() =>
                history.push(`/browse?category=${option.id}&subcategory=${category.id}`)
              }
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
