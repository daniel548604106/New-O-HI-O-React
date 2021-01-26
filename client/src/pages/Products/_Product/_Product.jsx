import React, { useState, useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/loader';
import { openLoginModal } from '../../../store/actions/indexActions';
import { useHistory, useParams } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { listProducts } from '../../../store/product/productAction';
import { apiGetProduct, apiGetAllProducts } from '../../../api/index';
import classes from './_Product.module.scss';
import DesignShopInfo from '../../../components/Product/DesignShopInfo/DesignShopInfo.jsx';
import ProductCTA from '../../../components/Product/ProductCTA/ProductCTA.jsx';
import ProductInfo from '../../../components/Product/ProductInfo/ProductInfo.jsx';
import ProductDescription from '../../../components/Product/ProductDescription/ProductDescription.jsx';
import ProductDisplay from '../../../components/Product/ProductDisplay/ProductDisplay.jsx';
import ProductBanner from '../../../components/Product/ProductBanner/ProductBanner.jsx';
import ProductRecommendation from '../../../components/Product/ProductRecommendation/ProductRecommendation.jsx';
const Product = () => {
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();
  const history = useHistory();
  const params = useParams();
  const isLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const productList = useSelector((state) => state.productList);
  const [product, setProduct] = useState('');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(false);

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
      console.log(recommendedProducts);
    };
    getRecommendedProducts();
  }, []);

  const scrollToPage = (idx) => {
    idx === 2 && window.scrollTo({ behavior: 'smooth', top: evaluation.current.offsetTop - 80 });
    idx === 0 &&
      window.scrollTo({ behavior: 'smooth', top: productDescription.current.offsetTop - 80 });
  };

  return (
    <div className={classes.productRoot}>
      <div className={showBanner ? classes.showBanner : classes.hideBanner}>
        <ProductBanner product={product} scrollToPage={scrollToPage} />
      </div>
      <div className={classes.containerLayout}>
        <div ref={topDisplay} className={classes.productDisplay}>
          <ProductDisplay product={product} />
        </div>
        <div className={classes.productMainInfo}>
          <div className={classes.info}>
            <ProductInfo product={product} />
          </div>
          <div className={classes.cta}>
            <ProductCTA product={product} />
          </div>
        </div>
      </div>
      <div className={classes.containerLayout}>
        <div className={classes.productDescription}>
          <ProductDescription
            productDescriptionRef={productDescription}
            evaluationRef={evaluation}
            id="product-description"
            product={product}
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
