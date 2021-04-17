import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Badge } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavMenu from '../Navbar/NavMenu/NavMenu.jsx';
import classes from './Header.module.scss';
import Logo from '../../assets/images/global/O.HI.O-logo.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Dropdown from './Dropdown/Dropdown.jsx';
import { openLoginModal, openMenuDrawer } from '../../store/index/indexAction';
import SearchBar from './SearchBar/SearchBar.jsx';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import DefaultImage from '../../assets/images/global/O.HI.O-footer.svg';
const Navbar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [searchInput, setSearchInput] = useState('');
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState('');
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isLoginModalShow = useSelector((state) => state.isLoginModalShow);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toCart = () => {
    isUserLoggedIn ? history.push('/cart') : handleOpenLoginModal();
  };

  const handleSearchInput = () => {
    history.push(`/search?q=${searchInput}`);
    setSearchInput('');
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  };

  const toggleSearchBar = (e) => {
    e.stopPropagation();
    setSearchBarOpen(!searchBarOpen);
  };

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
    <>
      <div className={classes.headerBar}>
        <div className={classes.toolBar}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
                placeholder="搜尋好設計"
              />
              <button onClick={() => handleSearchInput()} className={classes.searchBtn}>
                搜尋
              </button>
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="/application"
              className={classes.openShop}
            >
              我想在 O.HI.O 上開店
            </Link>
            {isUserLoggedIn ? (
              <div className={classes.tabs}>
                <div className={classes.avatar}>
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
                </div>
                <div>
                  <Link to="/favorite?tab=products" className={classes.favIcon}>
                    <FavoriteBorderIcon />
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.loginBtn} onClick={() => handleOpenLoginModal()}>
                  <p style={{ fontSize: '14px' }}>{t('login')}</p>
                </div>
              </>
            )}
            <Badge badgeContent={totalCartItems} color="secondary" component={Link} to="/cart">
              <ShoppingBasketIcon className={classes.cart} style={{ color: 'black' }} />
            </Badge>
          </div>
          <div className={classes.sectionMobile}>
            <SearchIcon className={classes.searchIcon} onClick={(e) => toggleSearchBar(e)} />
            {isUserLoggedIn ? (
              <>
                {currentUser ? (
                  <img
                    onClick={() => history.push('/my/setting')}
                    className={classes.avatarPicture}
                    src={currentUser && currentUser.picture}
                    alt="profile picture"
                  />
                ) : (
                  <PersonIcon />
                )}
                <FavoriteBorderIcon
                  onClick={() => history.push('/favorite?tab=products')}
                  className={classes.favIcon}
                />
              </>
            ) : (
              <span onClick={() => handleOpenLoginModal()} className={classes.loginBtn}>
                <PersonIcon />
              </span>
            )}
            <Badge onClick={() => toCart()} badgeContent={totalCartItems} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </div>
        </div>
        <NavMenu />
      </div>
      <div>
        <SearchBar searchBarOpen={searchBarOpen} />
      </div>
    </>
  );
};

export default Navbar;
