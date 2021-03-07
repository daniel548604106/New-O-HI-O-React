import React, { useState, useEffect } from 'react';
import classes from './MenuDrawer.module.scss';
import clsx from 'clsx';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import logoutIcon from '../../../assets/images/global/logout.svg';
import { menuOptions } from '../../../lib/menuOptions';
import { setUserLogout } from '../../../store/user/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
const MenuDrawer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('繁體中文(台灣)');
  const history = useHistory();
  const changeLanguage = () => {
    language === 'English'
      ? (setLanguage('繁體中文(台灣)'), i18n.changeLanguage('tw'))
      : (setLanguage('English'), i18n.changeLanguage('en'));
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  useEffect(() => {
    if (Cookie.get('me')) {
      setUser(JSON.parse(Cookie.get('me')));
    }
  }, []);
  const logout = () => {
    history.push('/');
    dispatch(setUserLogout());
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.myListLayout}>
          <Link to={'/my/setting'} className={classes.list}>
            {user.picture ? <img src={user.picture} alt="" /> : <PersonIcon src={user.picture} />}
            <p className={classes.myName}>{user.name}</p>
          </Link>
          <Link className={classes.list} to={'/my/email'}>
            我的信箱
          </Link>
          <Link className={classes.list} to={'/my/notification'}>
            通知中心
          </Link>
          <Link className={classes.list} to={'/my/purchase/unpaid'}>
            購買訂單
          </Link>
        </div>
        <div className={classes.title}>
          <p>所有分類</p>
        </div>
        {menuOptions.map((option, index) => (
          <div key={option.title} className={classes.optionsLayout}>
            <div>
              <img src={option.icon} alt="" />
              <p>{option.title}</p>
            </div>
            <ChevronRightIcon />
          </div>
        ))}
        <div className={classes.title}>
          <p>探索更多</p>
        </div>
      </List>
      <List>
        <div className={classes.langaugeSelector}>
          <LanguageIcon />
          <p onClick={() => changeLanguage()}>{language}</p>
        </div>
        {isUserLoggedIn && (
          <div className={classes.optionsLayout} button onClick={logout}>
            <div>
              <img src={logoutIcon} alt="" />
              <p>登出</p>
            </div>
          </div>
        )}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} style={{ margin: '0', padding: 0 }}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuDrawer;
