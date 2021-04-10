import React, { useState } from 'react';
import classes from './Banner.module.scss';
import PropTypes from 'prop-types';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
const Banner = ({ banners }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const incrementSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      prevActiveSlide += 1;
    });
  };
  const decrementSlide = () => {
    setActiveSlide((prevActiveSlide) => {
      prevActiveSlide -= 1;
      console.log(activeSlide);
    });
  };
  return (
    <div className={classes.bannerLayout}>
      {banners.map((banner) => (
        <div className={classes.bannerRow} key={banner.title}>
          <div
            className={classes.swiperBackground}
            style={{ backgroundImage: `url(${banner.image})`, cursor: 'pointer' }}
          ></div>
        </div>
      ))}

      <div className={classes.paginationRow}>
        {banners.map((banner, index) => (
          <div
            key={banner.title}
            className={`${classes.dots} ${activeSlide === index && classes.active}`}
          ></div>
        ))}
      </div>
      {window.innerWidth > 800 && (
        <div className={classes.paginationBtn}>
          <div onClick={() => decrementSlide()}>
            <ChevronLeftIcon style={{ fill: 'white', cursor: 'pointer' }} fontSize="large" />
          </div>
          <div onClick={() => incrementSlide()}>
            <ChevronRightIcon style={{ fill: 'white', cursor: 'pointer' }} fontSize="large" />
          </div>
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  banners: PropTypes.array,
};

export default Banner;
