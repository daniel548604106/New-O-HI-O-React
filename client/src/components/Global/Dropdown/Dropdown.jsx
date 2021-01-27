import React, { useState } from 'react';
import classes from './Dropdown.module.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Tags from '../Tags/Tags.jsx';
import PropTypes from 'prop-types';
const Dropdown = ({ title, product }) => {
  const [hideDropdown, setHideDropdown] = useState(false);
  return (
    <div>
      <div className={classes.dropdownRoot}>
        <div className={classes.dropdownLayout}>
          <h1 className={classes.title}>{title}</h1>

          <div onClick={() => setHideDropdown(!hideDropdown)} className={classes.icon}>
            <ExpandLessIcon className={hideDropdown && classes.rotateIcon} />
          </div>
        </div>
        {!hideDropdown && (
          <div className={hideDropdown ? classes.hideContent : classes.showContent}>
            {title === 'Tags' ? (
              <div>
                <Tags tag="Beauty" />
              </div>
            ) : (
              <p>{product.description}</p>
            )}
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  product: PropTypes.object,
};

export default Dropdown;
