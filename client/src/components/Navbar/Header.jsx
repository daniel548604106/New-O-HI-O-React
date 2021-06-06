import React, { useState, useEffect } from 'react';
import { Badge } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavMenu from '../Navbar/NavMenu/NavMenu.jsx';
import classes from './Header.module.scss';
import Logo from '../../assets/images/global/O.HI.O-logo.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/images/global/Icon/Outline/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/images/global/Icon/Outline/user.svg';
import { ReactComponent as Search } from '../../assets/images/global/Icon/Outline/search.svg';
import { ReactComponent as Menu } from '../../assets/images/global/Icon/Outline/menu-alt-2.svg';
import { ReactComponent as Heart } from '../../assets/images/global/Icon/Outline/heart.svg';
import { openLoginModal, openMenuDrawer } from '../../store/index/indexAction';
import SearchBar from './SearchBar/SearchBar.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
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
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState('');

  const toCart = () => {
    isUserLoggedIn ? history.push('/cart') : handleOpenLoginModal();
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    history.push(`/search?keyword=${searchInput}`);
    setSearchInput('');
  };

  const handleMobileSearchInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      history.push(`/search?keyword=${searchInput}`);
      setSearchInput('');
    }
  };

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
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
    <header>
      <nav>
        <div>
          <div onClick={() => dispatch(openMenuDrawer())} className={classes.sectionMobile}>
            <Menu className={classes.icon} />
          </div>
          <img onClick={() => history.push('/')} className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.search}>
            <form action="">
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                onKeyDown={(e) =>
                  searchInput.length > 0 && e.key === 'Enter' ? handleSearchInput() : ''
                }
                value={searchInput}
                placeholder="探索好設計"
              />
            </form>
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
                  <User />
                )}
                <div className={classes.dropdown}>
                  <Dropdown />
                </div>
              </li>
              <Heart
                className={`${classes.heartIcon} ${classes.icon}`}
                onClick={() => history.push('/favorite?tab=products')}
              />
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
              <ShoppingBag className={`${classes.cart} ${classes.icon}`} />
            </Badge>
          </li>
        </ul>
        <ul className={classes.sectionMobile}>
          <div className={classes.searchMobile}>
            <form action="">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => handleMobileSearchInput(e)}
                type="search"
                placeholder="探索好設計"
              />
              <Search className={`${classes.searchIcon} ${classes.icon}`} />
            </form>
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
                  <User />
                </li>
              )}
              <li>
                <Heart
                  onClick={() => history.push('/favorite?tab=products')}
                  className={`${classes.favIcon} ${classes.icon}`}
                />
              </li>
            </>
          ) : (
            <li onClick={() => handleOpenLoginModal()} className={classes.loginBtn}>
              <User className={classes.icon} />
            </li>
          )}
          <li>
            <Badge onClick={() => toCart()} badgeContent={totalCartItems} color="secondary">
              <ShoppingBag className={classes.icon} />
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

export default Navbar;
