import React from 'react';

import classes from './LanguagePreference.module.scss';
const LanguagePreference = () => {
  return (
    <>
      <div className={classes.languagePreference}>
        <h2>Language Preferences</h2>
        <p>
          Language: <span>English</span> / Currency: <span>New Taiwan Dollar (TWD) NT$</span>{' '}
          <span className={classes.more}>(More)</span>
        </p>
        <p>
          Click <span className={classes.here}>here</span> to change your language preferences. You
          can also update your settings at any time in the lower right hand corner of the interface.
        </p>
      </div>
    </>
  );
};

export default LanguagePreference;
