import React, { useState, useEffect } from 'react';
import classes from './Dropdown.module.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Tags from '../Tags/Tags.jsx';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTranslation } from 'react-i18next';
const Dropdown = ({ title, product }) => {
  const { t } = useTranslation(['general']);
  const [showMore, setShowMore] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);

  return (
    <div>
      <div className={classes.dropdownRoot}>
        <div className={classes.dropdownLayout}>
          <h1 className={classes.title}>{t(title)}</h1>

          <div onClick={() => setHideDropdown(!hideDropdown)} className={classes.icon}>
            <ExpandLessIcon className={hideDropdown && classes.rotateIcon} />
          </div>
        </div>
        {!hideDropdown && (
          <div className={hideDropdown ? classes.hideContent : classes.showContent}>
            {title === 'tags' ? (
              <div>
                <Tags tag="Beauty" />
              </div>
            ) : (
              <div className={classes.description}>
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  style={{ height: showMore ? '100%' : '300px' }}
                ></div>
                {
                  <div className={classes.dropDown} onClick={() => setShowMore(!showMore)}>
                    <span>{showMore ? '收起內容' : '展開內容'}</span>
                    <ArrowDropDownIcon style={{ transform: showMore && 'rotate(180deg)' }} />
                  </div>
                }
              </div>
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
