import React from 'react';
import classes from './Categories.module.scss';
import { menuOptions } from '../../../../lib/menuOptions';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Categories = () => {
  return (
    <div>
      {menuOptions.map((option, index) => (
        <div key={option.title} className={classes.optionsLayout}>
          <p>{option.title}</p>
          <ChevronRightIcon />
        </div>
      ))}
    </div>
  );
};

export default Categories;
