import React from 'react';
import classes from './Account.module.scss';
import facebook from '../../../../assets/images/global/facebook.svg';
import Button from '../../../Global/Button/Button.jsx';
const Account = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <form action="">
        <label htmlFor="nickName">Nickname</label>
        <input type="text" id="nickname" />
        <label htmlFor="nickName">Your email address</label>
        <input type="text" id="email" />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="birthday">Birthday</label>
        <div className={classes.birthday}>
          <select name="year" id="year">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span> / </span>
          <select name="month" id="month">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span> / </span>
          <select name="date" id="date">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </form>
      <hr />
      <div className={classes.profile}>
        <h2>Change Profile Picture</h2>
        <div className={classes.uploadPhoto}>
          <img src={facebook} alt="" />
          <div>
            <span>Optimal Size : 600 * 600px</span>
            <Button text="Upload Photo" />
          </div>
        </div>
      </div>
      <hr />
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
    </div>
  );
};

export default Account;
