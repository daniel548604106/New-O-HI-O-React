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
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { SwipeableDrawer, Button, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuDrawer from './MenuDrawer';
import { openLoginModal } from '../../store/actions/indexActions';

const Navbar = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Tangerine', 'cursive'].join(','),
    },
  });

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isLoginModalShow = useSelector((state) => state.isLoginModalShow);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
        <Toolbar>
          <Link to="/" className={classes.link}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">O.HI.O</Typography>
            </ThemeProvider>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton>
              <Badge badgeContent={17} color="secondary" component={Link} to="/cart">
                <ShoppingBasketIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => handleOpenLoginModal()}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton>
              <Badge badgeContent={17} color="secondary" component={Link} to="/cart">
                <ShoppingBasketIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => handleOpenLoginModal()}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="show more"
              style={{ marginLeft: '5px' }}
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MenuDrawer />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
