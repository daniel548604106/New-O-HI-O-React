import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavMenu from '../Navbar/NavMenu/NavMenu.jsx';
import classes from './Header.module.scss';
import Logo from '../../assets/images/global/O.HI.O-logo.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Dropdown from './Dropdown/Dropdown.jsx';
import { openLoginModal, openMenuDrawer } from '../../store/index/indexAction';
import SearchBar from './SearchBar/SearchBar.jsx';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import DefaultImage from '../../assets/images/global/O.HI.O-footer.svg';
const Index = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [searchInput, setSearchInput] = useState('');
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState('');

  const toCart = () => {
    isUserLoggedIn ? history.push('/cart') : handleOpenLoginModal();
  };

  const handleSearchInput = () => {
    history.push(`/search?q=${searchInput}`);
    setSearchInput('');
  };

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  };

  // const toggleSearchBar = (e) => {
  //   e.stopPropagation();
  //   setSearchBarOpen(!searchBarOpen);
  // };

  useEffect(() => {
    setSearchBarOpen(false);
  }, [location]);
  useEffect(() => {
    setTotalCartItems(
      cartItems.reduce((total, cartItem) => {
        return total + Number(cartItem.quantity);
      }, 0),
    );
  }, [cartItems]);

  return (
    <header>
      <nav>
        <div>
          <div onClick={() => dispatch(openMenuDrawer())} className={classes.sectionMobile}>
            <MenuIcon />
          </div>
          <img onClick={() => history.push('/')} className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.search}>
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              onKeyDown={(e) =>
                searchInput.length > 0 && e.key === 'Enter' ? handleSearchInput() : ''
              }
              value={searchInput}
              placeholder="探索好設計"
            />
            <button onClick={() => handleSearchInput()} className={classes.searchBtn}>
              搜尋
            </button>
          </div>
        </div>
        <ul className={classes.sectionDesktop}>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="/application"
              className={classes.openShop}
            >
              我想在 O.HI.O 上開店
            </Link>
          </li>
          {isUserLoggedIn ? (
            <>
              <li className={classes.avatar}>
                {currentUser ? (
                  <img
                    src={currentUser ? currentUser.picture : DefaultImage}
                    alt="profile picture"
                  />
                ) : (
                  <PersonIcon />
                )}
                <div className={classes.dropdown}>
                  <Dropdown />
                </div>
              </li>
              <li>
                <Link to="/favorite?tab=products" className={classes.favIcon}>
                  <FavoriteBorderIcon />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={classes.loginBtn} onClick={() => handleOpenLoginModal()}>
                <a style={{ fontSize: '14px' }}>{t('login')}</a>
              </li>
            </>
          )}
          <li onClick={() => toCart()}>
            <Badge badgeContent={totalCartItems} color="secondary">
              <ShoppingBasketIcon className={classes.cart} />
              <ShoppingCartIcon />
            </Badge>
          </li>
        </ul>
        <ul className={classes.sectionMobile}>
          <div className={classes.searchMobile}>
            <input type="search" placeholder="探索好設計" />
            <SearchIcon className={classes.searchIcon} />
          </div>
          {isUserLoggedIn ? (
            <>
              {currentUser ? (
                <li>
                  <img
                    onClick={() => history.push('/my/setting')}
                    className={classes.avatar}
                    src={currentUser && currentUser.picture}
                    alt="profile picture"
                  />
                </li>
              ) : (
                <li>
                  <PersonIcon />
                </li>
              )}
              <li>
                <FavoriteBorderIcon
                  onClick={() => history.push('/favorite?tab=products')}
                  className={classes.favIcon}
                />
              </li>
            </>
          ) : (
            <li onClick={() => handleOpenLoginModal()} className={classes.loginBtn}>
              <a href="#">
                <PersonIcon />
              </a>
            </li>
          )}
          <li>
            <Badge onClick={() => toCart()} badgeContent={totalCartItems} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </li>
        </ul>
      </nav>
      <NavMenu />
      <div>
        <SearchBar searchBarOpen={searchBarOpen} />
      </div>
    </header>
  );
};

export default Index;
