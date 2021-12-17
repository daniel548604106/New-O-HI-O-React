import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Banner.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = ({ banners }) => {
  const history = useHistory();
  return (
    <div className={classes.bannerLayout}>
      <Swiper
        id="swiper-banner"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        autoPlay
        pagination={{ clickable: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.image}>
            <div
              onClick={() => history.push(`/topic/${banner.topic}`)}
              className={classes.swiperBackground}
              style={{ backgroundImage: `url(${banner.image})`, cursor: 'pointer' }}
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
