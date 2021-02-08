import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Badge, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavMenu from '../Navbar/NavMenu/NavMenu.jsx';
import classes from './Header.module.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuDrawer from './MenuDrawer/MenuDrawer.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import { openLoginModal } from '../../store/index/indexAction';
import SearchBar from './SearchBar/SearchBar.jsx';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Cookie from 'js-cookie';

const Navbar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const meData = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isLoginModalShow = useSelector((state) => state.isLoginModalShow);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  useEffect(() => {
    setSearchBarOpen(false);
  }, [location]);
  const totalCartItems =
    cartItems &&
    cartItems.reduce((total, cartItem) => {
      return (total += Number(cartItem.quantity));
    }, 0);

  const toCart = () => {
    isUserLoggedIn ? history.push('/cart') : handleOpenLoginModal();
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.headerBar}>
        <div className={classes.toolBar}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.sectionMobile}>
              <MenuDrawer />
            </div>
            <Link to="/" className={classes.link}>
              <div variant="h3" style={{ fontSize: '20px', marginLeft: '10px' }}>
                O.HI.O
              </div>
            </Link>
          </div>
          <div className={classes.sectionDesktop}>
            {isUserLoggedIn ? (
              <div className={classes.tabs}>
                <div className={classes.avatar}>
                  <img src={meData.picture} alt="" />
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
              <div className={classes.loginBtn} onClick={() => handleOpenLoginModal()}>
                <p style={{ fontSize: '14px' }}>{t('login')}</p>
              </div>
            )}

            <div>
              <Badge badgeContent={totalCartItems} color="secondary" component={Link} to="/cart">
                <ShoppingBasketIcon className={classes.cart} style={{ color: 'black' }} />
              </Badge>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={(e) => toggleSearchBar(e)}>
              <SearchIcon />
            </IconButton>
            {isUserLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/my/setting">
                  <img className={classes.avatar} src={meData.picture} alt="" />
                </Link>
                <Link
                  to="/favorite?tab=products"
                  style={{ marginLeft: '10px' }}
                  className={classes.favIcon}
                >
                  <FavoriteBorderIcon />
                </Link>
              </div>
            ) : (
              <span onClick={() => handleOpenLoginModal()} className={classes.loginBtn}>
                {t('login')}
              </span>
            )}

            <IconButton>
              <Badge badgeContent={totalCartItems} color="secondary" onClick={() => toCart()}>
                <ShoppingBasketIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
      <div>{<SearchBar searchBarOpen={searchBarOpen} />}</div>
      {renderMobileMenu}
      <NavMenu />
    </>
  );
};

export default Navbar;
