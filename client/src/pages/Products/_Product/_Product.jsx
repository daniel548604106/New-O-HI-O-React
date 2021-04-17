import React, { useState, useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal } from '../../../store/index/indexAction';
import { useHistory, useParams } from 'react-router-dom';
import { listProducts } from '../../../store/product/productAction';
import {
  apiGetProduct,
  apiGetReviews,
  apiGetShopInfo,
  apiGetRecommendedProducts,
} from '../../../api/index';
import classes from './_Product.module.scss';
import DesignShopInfo from '../../../components/Product/DesignShopInfo/DesignShopInfo.jsx';
import ProductCTA from '../../../components/Product/ProductCTA/ProductCTA.jsx';
import ProductInfo from '../../../components/Product/ProductInfo/ProductInfo.jsx';
import ProductDescription from '../../../components/Product/ProductDescription/ProductDescription.jsx';
import ProductDisplay from '../../../components/Product/ProductDisplay/ProductDisplay.jsx';
import ProductBanner from '../../../components/Product/ProductBanner/ProductBanner.jsx';
import ProductRecommendation from '../../../components/Product/ProductRecommendation/ProductRecommendation.jsx';
import { useTranslation } from 'react-i18next';
import HelmetTitle from '../../../components/Global/HelmetTitle/HelmetTitle.jsx';

const Product = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();
  const history = useHistory();
  const params = useParams();
  const isLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [product, setProduct] = useState('');
  const [shopInfo, setShopInfo] = useState('');
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
  }, [dispatch]);

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
  }, []);
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

  useEffect(() => {
    const getShopInfo = async () => {
      try {
        const { data } = await apiGetShopInfo(product.publishedBy.account);
        console.log('shopIfo', data);
      } catch (error) {
        console.log(error);
      }
    };
    getShopInfo();
  }, [product]);

  // Fetch Recommended Products
  useEffect(() => {
    const getRecommendedProducts = async () => {
      const { data } = await apiGetRecommendedProducts();
      console.log('rec', data);
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
      <HelmetTitle
        title={product.name}
        description={product.description}
        image={product && product.images[0]}
      />
      <div className={showBanner ? classes.showBanner : classes.hideBanner}>
        <ProductBanner product={product} scrollToPage={scrollToPage} />
      </div>
      <div className={classes.containerLayout}>
        <div ref={topDisplay} className={classes.productDisplay}>
          <ProductDisplay product={product} />
        </div>
        <section className={classes.productMainInfo}>
          <div className={classes.info}>
            <ProductInfo t={t} product={product} />
          </div>
          <div className={classes.cta}>
            <ProductCTA product={product} />
          </div>
        </section>
      </div>
      <div className={classes.containerLayout}>
        <section className={classes.productDescription}>
          <ProductDescription
            t={t}
            productDescriptionRef={productDescription}
            evaluationRef={evaluation}
            id="product-description"
            product={product}
            reviews={reviews}
          />
        </section>
        <section className={classes.designShopInfo}>
          <DesignShopInfo product={product} shopInfo={shopInfo} />
        </section>
      </div>
      <section>
        <ProductRecommendation products={recommendedProducts} />
      </section>
    </div>
  );
};

export default Product;
