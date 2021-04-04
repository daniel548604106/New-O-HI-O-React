import React, { useState } from 'react';
import classes from './About.module.scss';
import LanguageIcon from '@material-ui/icons/Language';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Title from '../../../Global/Menu/Title/Title.jsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogout } from '../../../../store/user/userAction';
const About = () => {
  const [language, setLanguage] = useState('繁體中文(台灣)');
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setUserLogout());
  };
  const helpOptions = [
    {
      name: 'FAQ/Help',
      route: 'help',
    },
    {
      name: 'Terms & Policies',
      route: 'policies?type=terms',
    },
    {
      name: 'Returns Policy',
      route: 'policies?type=returns',
    },
  ];
  const aboutOptions = [
    {
      name: 'About Us',
      route: 'about',
    },
    {
      name: 'Careers',
      route: 'careers',
    },
  ];
  return (
    <div>
      <Title title="Help/Policies" />
      {helpOptions.map((option) => (
        <Link to={option.route} className={classes.option} key={option.name}>
          {option.name}
        </Link>
      ))}
      <Title title="About TaiWZoo" />
      {aboutOptions.map((option) => (
        <Link to={option.route} className={classes.option} key={option.name}>
          {option.name}
        </Link>
      ))}
      <Link to="/application" className={classes.openShop}>
        我想在 TaiWZoo 上開店
        <ChevronRightIcon />
      </Link>
      <div className={classes.language}>
        <LanguageIcon style={{ width: '16px' }} />
        <p onClick={() => changeLanguage()}>{language}</p>
      </div>
      {isUserLoggedIn && (
        <Link to="/" className={classes.logoutBtn} onClick={logout}>
          <p>登出</p>
        </Link>
      )}
    </div>
  );
};

export default About;
