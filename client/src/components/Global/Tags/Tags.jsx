import ClearIcon from '@material-ui/icons/Clear';
import propTypes from 'prop-types';
import React from 'react';

import classes from './Tags.module.scss';
const Tags = ({ tag, clearBtn, highlight, uppercase }) => {
  return (
    <span className={classes.tagsContainer}>
      <div>
        <p className={highlight && classes.highlight}>{tag}</p>
        {clearBtn && <ClearIcon className={classes.icon} />}
      </div>
    </span>
  );
};

Tags.propTypes = {
  tag: propTypes.string,
  clearBtn: propTypes.bool,
  highlight: propTypes.string,
  uppercase: propTypes.bool,
};

export default Tags;
