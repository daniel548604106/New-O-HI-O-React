import React, { useEffect, useState } from 'react';
import Star from '../../../assets/images/global/star.png';
import StarGrey from '../../../assets/images/global/star-grey.png';
import classes from './Stars.module.scss';
import PropTypes from 'prop-types';
const Stars = ({ score }) => {
  const [starArr, setStarArr] = useState([]);
  useEffect(() => {
    let integer = Number((score + '').split('.')[0]);
    let decimal = Number((score + '').split('.')[1]);
    const count = () => {
      for (let i = 0; i < integer; i++) {
        starArr.push(1);
      }
      if (isNaN(decimal) || decimal === undefined || 0) return;
      starArr.push(+`0.${decimal}`);
    };
    count();
  }, [score, starArr]);
  return (
    <div className={classes.starRow}>
      {starArr.map((star, idx) => (
        <li
          key={idx}
          style={{
            width: '30px',
            height: '30px',
            display: 'block',
            backgroundImage: `url(${StarGrey})`,
            position: 'relative',
          }}
        >
          <span
            style={{
              backgroundImage: `url(${Star})`,
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'absolute',
              top: '0',
              left: '0',
            }}
          ></span>
        </li>
      ))}
    </div>
  );
};

Stars.propTypes = {
  score: PropTypes.number,
};

export default Stars;
