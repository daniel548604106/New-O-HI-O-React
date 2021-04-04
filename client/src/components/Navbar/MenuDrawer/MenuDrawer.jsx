import React, { useState, useEffect } from 'react';
import classes from './MenuDrawer.module.scss';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { openLoginModal } from '../../../store/index/indexAction';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import ListAltIcon from '@material-ui/icons/ListAlt';
import About from './About/About.jsx';
import Picks from './Picks/Picks.jsx';
import Categories from './Categories/Categories.jsx';
import Inspiration from './Inspiration/Inspiration.jsx';
import Cookie from 'js-cookie';
const MenuDrawer = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['TaiWZoo 選物', '購物零感', '所有分類', '關於 TaiWZoo'];
  const changeLanguage = () => {
    language === 'English'
      ? (setLanguage('繁體中文(台灣)'), i18n.changeLanguage('tw'))
      : (setLanguage('English'), i18n.changeLanguage('en'));
  };
  const [user, setUser] = useState({});
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  useEffect(() => {
    if (Cookie.get('me')) {
      setUser(JSON.parse(Cookie.get('me')));
    }
  }, [isUserLoggedIn]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const Tabs = () => (
    <div className={classes.tabsLayout}>
      {tabs.map((tab, index) => (
        <span
          className={activeTab === index && classes.active}
          key={tab}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </span>
      ))}
    </div>
  );

  const CtaBtn = () => (
    <div className={classes.ctaBtn}>
      {isUserLoggedIn ? (
        <div className={classes.myListLayout}>
          <Link className={classes.list} to={'/my/email'}>
            <EmailIcon />
            <p>我的信箱</p>
          </Link>
          <Link className={classes.list} to={'/my/notification'}>
            <NotificationsIcon />
            <p>通知中心</p>
          </Link>
          <Link className={classes.list} to={'/my/purchase/unpaid'}>
            <ListAltIcon />
            <p>購買訂單</p>
          </Link>
          <Link to={'/my/setting'} className={classes.list}>
            {user.picture ? <img src={user.picture} alt="" /> : <PersonIcon src={user.picture} />}
          </Link>
        </div>
      ) : (
        <div onClick={handleOpenLoginModal} className={classes.loginBtn}>
          登入 / 註冊
        </div>
      )}
    </div>
  );

  const list = (anchor) => (
    <div
      className={clsx(
        classes.list,
        {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        },
        classes.menuLayout,
      )}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.mainLayout}>
        <Tabs />
        {activeTab === 0 && <Picks />}
        {activeTab === 1 && <Inspiration />}
        {activeTab === 2 && <Categories />}
        {activeTab === 3 && <About />}
      </div>
      <div>
        <CtaBtn />
      </div>
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
