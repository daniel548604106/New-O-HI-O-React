import React, { useEffect, useState } from 'react';
import Star from '../../../assets/images/global/star.png';
import classes from './Stars.module.scss';
const Stars = () => {
  let score = '4.5';
  let integer = +score.split('.')[0];
  let decimal = +score.split('.')[1];
  const [starArr, setStarArr] = useState([]);
  useEffect(() => {
    const count = () => {
      for (let i = 0; i < integer; i++) {
        starArr.push(1);
      }
      if (decimal === 0) return;

      starArr.push(+`0.${decimal}`);
      console.log(starArr);
    };
    count();
  }, []);
  return (
    <div className={classes.starRow}>
      {starArr.map((star, idx) => (
        <img key={idx} style={{ width: '20%', height: '30px' }} src={Star} alt="" />
      ))}
    </div>
  );
};

export default Stars;
