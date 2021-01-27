import React, { useState } from 'react';
import { Menu, MenuItem, Badge, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuDrawer from './MenuDrawer/MenuDrawer.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import { openLoginModal } from '../../store/actions/indexActions';
import SearchBar from './SearchBar/SearchBar.jsx';
import Cookie from 'js-cookie';

const Navbar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const meData = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isLoginModalShow = useSelector((state) => state.isLoginModalShow);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const totalCartItems = cartItems.reduce((total, cartItem) => {
    return (total += cartItem.quantity);
  }, 0);

  const toCart = () => {
    isUserLoggedIn ? history.push('/cart') : handleOpenLoginModal();
  };
  const handleClickAway = () => {
    setSearchBarOpen(false);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  };

  const menuId = 'primary-search-account-menu';

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
              <div className={classes.avatar}>
                {<img src={meData.picture} alt="" />}
                <div className={classes.dropdown}>
                  <Dropdown />
                </div>
              </div>
            ) : (
              <div onClick={() => handleOpenLoginModal()}>
                <p className={classes.loginBtn} style={{ fontSize: '14px' }}>
                  {t('login')}
                </p>
              </div>
            )}

            <IconButton>
              <Badge badgeContent={totalCartItems} color="secondary" component={Link} to="/cart">
                <ShoppingBasketIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <IconButton onClick={() => setSearchBarOpen(!searchBarOpen)}>
                <SearchIcon />
              </IconButton>
            </ClickAwayListener>
            {isUserLoggedIn ? (
              <div>
                <Link to="/account">
                  <img className={classes.avatar} src={meData.picture} alt="" />
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
    </>
  );
};

export default Navbar;
