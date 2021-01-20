import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { apiPostOauthLogin } from '../../api/index';
import PropTypes from 'prop-types';
import Loader from '../../components/loader';
import Cookie from 'js-cookie';
const OAuth = (props) => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    const type = params.type;
    if (!location.search) {
      window.location.href = '/';
    }
    let code = location.search.split('=')[1];
    // For Line
    if (code.split('&')) {
      code = code.split('&')[0];
    }
    console.log(type, code);
    console.log('location', location);
    const postOauthLogin = async () => {
      try {
        const { data } = await apiPostOauthLogin({ type, code });
        Cookie.set('userInfo', data.user);
        console.log(res.data.user);
        console;
        window.location.href = '/';
        console.log(res.data.user);
      } catch (error) {
        window.location.href = '/';
        console.log(error);
      }
    };
    postOauthLogin();
  }, []);

  return (
    <div style={{ width: '100vw', height: '90vh' }}>
      <Loader />
    </div>
  );
};

export default OAuth;
