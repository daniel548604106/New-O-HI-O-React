import React, { useState, useEffect } from 'react';
import classes from './General.module.scss';
import Button from '../../../../Global/Button/Button.jsx';
import Reminder from '../../../../Global/Reminder/Reminder.jsx';
import LanguagePreference from './LanguagePreference/LanguagePreference.jsx';
import ChangeProfilePicture from './ChangeProfilePicture/ChangeProflePicture.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { apiPatchMyData } from '../../../../../api/index';
import { setUserLoggedIn } from '../../../../../store/user/userAction';
const _ = require('lodash');
import notify from '../../../../../lib/notification';
const General = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    gender: '',
    birthday: '',
  });

  useEffect(() => {
    const { email, gender, name, birthday } = user;
    setUserData({
      name,
      email,
      gender,
      birthday,
    });
  }, [user]);

  const yearSelection = _.range(1950, 2020);
  const monthSelection = _.range(1, 13);
  const dateSelection = _.range(1, 32);

  const onInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const save = async () => {
    try {
      const { data } = await apiPatchMyData(userData);
      dispatch(setUserLoggedIn(data.user));
      notify('更新個人資料成功！');
    } catch (error) {
      notify('很抱歉，目前系統出現了異常，暫時無法更新');
    }
  };
  return (
    <div>
      <h2>My Profile</h2>
      <Reminder
        title="Reminder"
        text="Your 'nickname' will be displayed in reviews and publications to prevent search engines finding your real name. Your email addresses, messages, and order information are protected under the Personal Information Protection Act."
      />
      <form action="">
        <label htmlFor="nickName">Nickname</label>
        <input
          type="text"
          name="name"
          id="nickname"
          onChange={(e) => onInputChange(e)}
          value={userData.name}
        />
        <label htmlFor="nickName">Your email address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={userData.email}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={userData.gender}
          onChange={(e) => onInputChange(e)}
        >
          <option value="Select" disabled>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="birthday">Birthday</label>
        <div className={classes.birthday}>
          <select name="year" id="year">
            {yearSelection.map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
          <span> / </span>
          <select name="month" id="month">
            {monthSelection.map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
          <span> / </span>
          <select name="date" id="date">
            {dateSelection.map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
        </div>
      </form>
      <span onClick={() => save()}>
        <Button text="save" />
      </span>
      <hr className={classes.hr} />
      <ChangeProfilePicture />
      <LanguagePreference />
    </div>
  );
};

export default General;
