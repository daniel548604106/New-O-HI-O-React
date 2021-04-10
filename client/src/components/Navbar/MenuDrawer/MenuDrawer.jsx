import React, { useState, useEffect } from 'react';
import classes from './MenuDrawer.module.scss';
import { Link } from 'react-router-dom';
import { openLoginModal } from '../../../store/index/indexAction';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['O.HI.O 選物', '購物零感', '所有分類', '關於 O.HI.O'];
  const [user, setUser] = useState({});
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  useEffect(() => {
    if (Cookie.get('me')) {
      setUser(JSON.parse(Cookie.get('me')));
    }
  }, [isUserLoggedIn]);

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
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

  return (
    <div className={classes.menuLayout}>
      <div onClick={(e) => e.stopPropagation()}>
        <Tabs />
      </div>
      <div className={classes.mainLayout}>
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
};

export default MenuDrawer;
