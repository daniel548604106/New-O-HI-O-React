import React from 'react';
import classes from './ChangeProfilePicture.module.scss';
import Button from '../../../../../Global/Button/Button.jsx';
import { useSelector } from 'react-redux';

const ChangeProflePicture = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <div className={classes.profile}>
        <h2>Change Profile Picture</h2>
        <div className={classes.uploadPhoto}>
          <img src={user.picture} alt="" />
          <div>
            <span>Optimal Size : 600 * 600px</span>
            <Button text="Upload Photo" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ChangeProflePicture;
