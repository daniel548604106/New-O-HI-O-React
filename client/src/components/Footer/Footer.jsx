import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.scss';
const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('繁體中文(台灣)');
  const changeLanguage = () => {
    language === 'English'
      ? (setLanguage('繁體中文(台灣)'), i18n.changeLanguage('tw'))
      : (setLanguage('English'), i18n.changeLanguage('en'));
  };
  return (
    <div
      style={{
        backgroundColor: '#000000',
        height: '100%',
        padding: '50px 15px 100px 15px',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{ color: 'white', display: 'flex', width: '20%', justifyContent: 'space-between' }}
        >
          <div>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Support</p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>

        <div className={classes.right}>
          <h2 style={{ color: 'white' }}>O.Hi.O</h2>
          <div className={classes.langaugeSelector}>
            <LanguageIcon />
            <p onClick={() => changeLanguage()}>{language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
