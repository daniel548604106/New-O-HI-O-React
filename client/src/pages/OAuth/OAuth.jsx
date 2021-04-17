import React, { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiPostOauthLogin } from '../../api/index';
import Loader from '../../components/Global/Loader/Loader.jsx';
import Cookie from 'js-cookie';
import { setUserLoggedIn } from '../../store/user/userAction';
import qs from 'query-string';
const OAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    console.log('here', qs.parse(location.search));
  }, [location]);
  useEffect(() => {
    const type = params.type;
    if (!location.search) {
      window.location.href = '/';
    }
    const code = qs.parse(location.search).code;
    console.log(type, code);
    console.log('location', location);
    const postOauthLogin = async () => {
      try {
        const { data } = await apiPostOauthLogin({ type, code });
        console.log('token', data.token, data.user);
        Cookie.set('me', data.user);
        Cookie.set('token', data.token);
        history.push('/');
        dispatch(setUserLoggedIn(data.user));
        console.log(data.user);
      } catch (error) {
        history.push('/');
        console.log(error);
      }
    };
    postOauthLogin();
  }, []);

  return (
    <div style={{ width: '100vw', zIndex: 16, minHeight: '60vh' }}>
      <Loader />
    </div>
  );
};

export default OAuth;
