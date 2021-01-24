import React, { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiPostOauthLogin } from '../../api/index';
import PropTypes from 'prop-types';
import Loader from '../../components/loader';
import Cookie from 'js-cookie';
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
        Cookie.set('me', data.user);
        Cookie.set('token', data.token);
        history.push('/');
        dispatch(setUserLoggedIn(data.user));
        console.log(res.data.user);
      } catch (error) {
        history.push('/');
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
