import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { apiPatchMyPhoto } from '../../../../../../api/index';
import notify from '../../../../../../lib/notification';
import classes from './ChangeProfilePicture.module.scss';
const ChangeProflePicture = () => {
  const [uploadPicture, setUploadPicture] = useState('');
  const user = useSelector((state) => state.user.currentUser);
  const handleUpload = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      //啟用 reader 讀取 image 資料
      setUploadPicture(e.target.result);
    };
    reader.readAsDataURL(image);
  };

  useEffect(() => {
    const patchMyPhoto = async () => {
      try {
        await apiPatchMyPhoto(uploadPicture);
      } catch (error) {
        notify('很抱歉！修改失敗！請重新再試一次');
      }
    };
    if (uploadPicture) {
      patchMyPhoto();
    }
  }, [uploadPicture]);
  return (
    <>
      <div className={classes.profile}>
        <h2>Change Profile Picture</h2>
        <div className={classes.uploadPhoto}>
          <img src={uploadPicture || user.picture} alt="" />
          <div>
            <span>Optimal Size : 600 * 600px</span>
            <form action="/my/photo" method="post" encType="multipart/form-data">
              <label onChange={(e) => handleUpload(e)}>
                <input style={{ display: 'none' }} name="avatar" accept="image/*" type="file" />
                <span className={classes.uploadPhotoBtn}>Upload Photo</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ChangeProflePicture;
