import Cookie from 'js-cookie';
import qs from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { apiPostOauthLogin } from '../../api/index';
import Loader from '../../components/Global/Loader/Loader.jsx';
import { setUserLoggedIn } from '../../store/user/userAction';
const OAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const type = params.type;
    if (!location.search) {
      window.location.href = '/';
    }
    const code = qs.parse(location.search).code;

    const postOauthLogin = async () => {
      try {
        const { data } = await apiPostOauthLogin({ type, code });
        Cookie.set('me', data.user);
        Cookie.set('token', data.token);
        history.push('/');
        dispatch(setUserLoggedIn(data.user));
      } catch (error) {
        history.push('/');
      }
    };
    postOauthLogin();
  }, [dispatch, history, location.search, params.type]);

  return (
    <div style={{ width: '100vw', zIndex: 16, minHeight: '60vh' }}>
      <Loader />
    </div>
  );
};

export default OAuth;
