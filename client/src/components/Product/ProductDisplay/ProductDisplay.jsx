import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductDisplay.module.scss';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { ReactComponent as FavoriteIcon } from '../../../assets/images/global/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, openLoginModal } from '../../../store/index/indexAction';
import { useParams } from 'react-router';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);

  const addToWishList = () => {
    const type = 'product';
    isUserLoggedIn ? dispatch(addToFavorite(params.id, type)) : dispatch(openLoginModal());
  };
  return product ? (
    <div className={classes.rootContainer}>
      {window.innerWidth > 500 ? (
        <>
          <div
            className={classes.displayImage}
            style={{ backgroundImage: `url(${product.images[activeImage]})` }}
          ></div>
          <div className={classes.controlImage}>
            {product.images.map((image, idx) => (
              <img
                key={image}
                className={activeImage === idx && classes.active}
                src={image}
                onClick={() => setActiveImage(idx)}
                alt=""
              />
            ))}
          </div>
        </>
      ) : (
        <div className={classes.bannerLayout}>
          <Swiper
            id="swiper-banner"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
          >
            {product.images.map((image) => (
              <SwiperSlide key={image}>
                <div
                  className={classes.displayImage}
                  style={{ backgroundImage: `url(${image})`, cursor: 'pointer' }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <FavoriteIcon
        onClick={() => addToWishList()}
        className={classes.icon}
        style={{
          fill:
            favoriteProducts.find((favoriteProduct) => favoriteProduct._id === product._id) &&
            '#eb7f82',
        }}
      />
    </div>
  ) : (
    <>
      <Skeleton height={300} />
      <Skeleton height={10} width={100} style={{ marginTop: '10px', display: 'block' }} />
      <Skeleton height={10} width={200} style={{ marginTop: '10px' }} />
      <Skeleton height={10} width={200} style={{ marginTop: '10px' }} />
    </>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};
export default ProductDisplay;
