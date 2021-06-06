import React, { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import Logo from '../../assets/images/global/O.HI.O-footer.svg';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.scss';
const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('English');
  const changeLanguage = () => {
    language === 'English'
      ? (setLanguage('繁體中文(台灣)'), i18n.changeLanguage('en'))
      : (setLanguage('English'), i18n.changeLanguage('tw'));
  };
  return (
    <div className={classes.footerLayout}>
      <img src={Logo} alt="logo" />
      <p>Design the way you are.</p>
      <div className={classes.languageSelector}>
        <LanguageIcon />
        <p onClick={() => changeLanguage()}>{language}</p>
      </div>
      <p className={classes.copyRight}>© {new Date().getFullYear()} O.HI.O. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
