import EmailIcon from '@material-ui/icons/Email';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { openLoginModal } from '../../../store/index/indexAction';
import About from './About/About.jsx';
import Categories from './Categories/Categories.jsx';
import classes from './MenuDrawer.module.scss';

const MenuDrawer = ({ onClick = () => {} }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
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

  const CtaBtn = () => (
    <div onClick={onClick} className={classes.ctaBtn}>
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
      <div>
        <CtaBtn />
      </div>
      <div>
        <Categories />
      </div>
      <div className={classes.mainLayout}>
        <About />
      </div>
    </div>
  );
};

MenuDrawer.propTypes = {
  onClick: PropTypes.func,
};

export default MenuDrawer;
