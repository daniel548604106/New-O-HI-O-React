import React from 'react';
import classes from './Banner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import PropTypes from 'prop-types';
const Banner = ({ banners }) => {
  return (
    <div className={classes.bannerLayout}>
      <Swiper
        id="swiper-banner"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoPlay
        AutoPlaySwipeableViews
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.title}>
            <div
              className={classes.swiperBackground}
              style={{ backgroundImage: `url(${banner.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Banner.propTypes = {
  banners: PropTypes.array,
};

export default Banner;
