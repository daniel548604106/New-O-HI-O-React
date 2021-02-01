import React, { useState, useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal } from '../../../store/index/indexAction';
import { useHistory, useParams } from 'react-router-dom';
import { listProducts } from '../../../store/product/productAction';
import { apiGetProduct, apiGetAllProducts, apiGetReviews } from '../../../api/index';
import classes from './_Product.module.scss';
import DesignShopInfo from '../../../components/Product/DesignShopInfo/DesignShopInfo.jsx';
import ProductCTA from '../../../components/Product/ProductCTA/ProductCTA.jsx';
import ProductInfo from '../../../components/Product/ProductInfo/ProductInfo.jsx';
import ProductDescription from '../../../components/Product/ProductDescription/ProductDescription.jsx';
import ProductDisplay from '../../../components/Product/ProductDisplay/ProductDisplay.jsx';
import ProductBanner from '../../../components/Product/ProductBanner/ProductBanner.jsx';
import ProductRecommendation from '../../../components/Product/ProductRecommendation/ProductRecommendation.jsx';
import Notification from '../../../components/Global/Notification/Notification.jsx';
import { useTranslation } from 'react-i18next';
const Product = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();
  const history = useHistory();
  const params = useParams();
  const isLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const productList = useSelector((state) => state.productList);
  const [product, setProduct] = useState('');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [reviews, setReviews] = useState([]);
  const checkout = () => {
    if (isLoggedIn) {
      return dispatch(openLoginModal());
    }
    history.push('/checkout');
  };
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  // Show Banner
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 400) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
          console.log('hihihi');
        }
      });
    };
  }, [window.pageYOffset]);
  // Fetch Reviews

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await apiGetReviews(params.id);
      console.log('reviews=>', data);
      setReviews(data.reviews);
    };
    getReviews();
  }, []);

  // Fetch Product

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await apiGetProduct(params.id);
      console.log(data.product);
      setProduct(data.product);
    };
    getProduct();
  }, []);

  // Fetch Recommended Products
  useEffect(() => {
    const getRecommendedProducts = async () => {
      const { data } = await apiGetAllProducts();
      console.log('recommended =>', data);
      setRecommendedProducts(data.products);
    };
    getRecommendedProducts();
  }, []);

  const scrollToPage = (idx) => {
    idx === 0
      ? window.scrollTo({ behavior: 'smooth', top: productDescription.current.offsetTop - 80 })
      : window.scrollTo({ behavior: 'smooth', top: evaluation.current.offsetTop - 80 });
  };

  return (
    <div className={classes.productRoot}>
      <div className="notification">
        <Notification title="已加入慾望清單" />
      </div>
      <div className={showBanner ? classes.showBanner : classes.hideBanner}>
        <ProductBanner product={product} scrollToPage={scrollToPage} />
      </div>
      <div className={classes.containerLayout}>
        <div ref={topDisplay} className={classes.productDisplay}>
          <ProductDisplay product={product} />
        </div>
        <div className={classes.productMainInfo}>
          <div className={classes.info}>
            <ProductInfo t={t} product={product} />
          </div>
          <div className={classes.cta}>
            <ProductCTA product={product} />
          </div>
        </div>
      </div>
      <div className={classes.containerLayout}>
        <div className={classes.productDescription}>
          <ProductDescription
            t={t}
            productDescriptionRef={productDescription}
            evaluationRef={evaluation}
            id="product-description"
            product={product}
            reviews={reviews}
          />
        </div>
        <div className={classes.designShopInfo}>
          <DesignShopInfo />
        </div>
      </div>
      <div>
        <ProductRecommendation products={recommendedProducts} />
      </div>
    </div>
  );
};

export default Product;
