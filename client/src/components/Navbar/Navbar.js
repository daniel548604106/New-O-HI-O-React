import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Badge,
  IconButton,
  InputBase,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { SwipeableDrawer, Button, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuDrawer from './MenuDrawer';
import Dropdown from './Dropdown';
import { openLoginModal } from '../../store/actions/indexActions';
import SearchBar from './SearchBar';
import Cookie from 'js-cookie';

const Navbar = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Tangerine', 'cursive'].join(','),
    },
  });

  const dispatch = useDispatch();
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
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.sectionMobile}>
              <MenuDrawer />
            </div>
            <Link to="/" className={classes.link}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3" style={{ fontSize: '20px', marginLeft: '10px' }}>
                  O.HI.O
                </Typography>
              </ThemeProvider>
            </Link>
          </div>

          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            {isUserLoggedIn ? (
              <div className="avatar" style={{ position: 'relative' }}>
                {
                  <img
                    style={{ borderRadius: '50%', width: '30px', height: '30px', margin: '0 10px' }}
                    src={meData.picture}
                    alt=""
                  />
                }
                <div
                  className="dropdown"
                  style={{
                    position: 'absolute',
                    bottom: '-80px',
                    right: '0',
                    zIndex: '12',
                  }}
                >
                  <Dropdown />
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleOpenLoginModal()}
                style={{
                  border: '1px solid black ',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 10px',
                  marginRight: '10px',
                }}
              >
                <p style={{ fontSize: '14px' }}>登入/註冊</p>
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
                {
                  <Link to="/account">
                    <img
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                      className={(classes.avatar, 'avatar')}
                      src={meData.picture}
                      alt=""
                    />
                  </Link>
                }
              </div>
            ) : (
              <span
                onClick={() => handleOpenLoginModal()}
                style={{
                  border: '1px solid black ',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 10px',
                  margin: '0 10px',
                  fontSize: '14px',
                }}
              >
                登入
              </span>
            )}

            <IconButton>
              <Badge badgeContent={totalCartItems} color="secondary" onClick={() => toCart()}>
                <ShoppingBasketIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div>{<SearchBar searchBarOpen={searchBarOpen} />}</div>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
