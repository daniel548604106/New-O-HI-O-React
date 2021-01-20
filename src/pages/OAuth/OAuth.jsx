import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { apiPostOauthLogin } from '../../api/index';
import PropTypes from 'prop-types';
const OAuth = (props) => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    const type = params.type;
    if (!location.search) {
      window.location.href = '/';
    }
    const code = location.search.split('=')[1];
    console.log(type, code);
    const postOauthLogin = async () => {
      try {
        const res = await apiPostOauthLogin({ type, code });
        window.location.href = '/';
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    postOauthLogin();
  }, []);

  return <div></div>;
};

export default OAuth;
