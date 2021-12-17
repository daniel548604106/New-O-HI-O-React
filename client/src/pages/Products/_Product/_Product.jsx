import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { apiGetProduct, apiGetRecommendedProducts, apiGetReviews } from '../../../api/index';
import HelmetTitle from '../../../components/Global/HelmetTitle/HelmetTitle.jsx';
import DesignShopInfo from '../../../components/Product/DesignShopInfo/DesignShopInfo.jsx';
import ProductBanner from '../../../components/Product/ProductBanner/ProductBanner.jsx';
import ProductCTA from '../../../components/Product/ProductCTA/ProductCTA.jsx';
import ProductDescription from '../../../components/Product/ProductDescription/ProductDescription.jsx';
import ProductDisplay from '../../../components/Product/ProductDisplay/ProductDisplay.jsx';
import ProductInfo from '../../../components/Product/ProductInfo/ProductInfo.jsx';
import ProductRecommendation from '../../../components/Product/ProductRecommendation/ProductRecommendation.jsx';
import { listProducts } from '../../../store/product/productAction';
import classes from './_Product.module.scss';

const Product = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();
  const params = useParams();
  const [product, setProduct] = useState('');
  const [shopInfo] = useState('');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [reviews, setReviews] = useState([]);

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
  }, []);
  // Fetch Reviews

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await apiGetReviews(params.id);
      setReviews(data.reviews);
    };
    getReviews();
  }, [params.id]);

  // Fetch Product

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await apiGetProduct(params.id);
      setProduct(data.product);
    };
    getProduct();
  }, [params.id]);

  // Fetch Recommended Products
  useEffect(() => {
    const getRecommendedProducts = async () => {
      const { data } = await apiGetRecommendedProducts();
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
      <Link
        to="/"
        style={{ position: 'fixed', zIndex: '100', top: '10px', left: '10px', color: 'white' }}
      >
        x
      </Link>
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

Product.propTypes = {
  id: PropTypes.string,
};
