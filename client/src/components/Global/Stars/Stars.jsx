import React, { useEffect, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
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
        <div key={idx}>
          <img
            style={{ width: '50%', height: '30px' }}
            src="../../../assets/images/global/star.png"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Stars;
