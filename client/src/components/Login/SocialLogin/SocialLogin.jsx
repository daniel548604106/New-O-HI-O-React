import qs from 'query-string';
import React from 'react';
import { useDispatch } from 'react-redux';

import LineIcon from '../../../assets/images/global/LINE_APP.png';
import { config, redirectUri } from '../../../lib/oAuth';
import { closeLoginModal } from '../../../store/index/indexAction';
import classes from './SocialLogin.module.scss';

const SocialLogin = () => {
  const dispatch = useDispatch();
  const oAuthLogin = (provider) => {
    const uri = redirectUri(provider);
    const query = qs.stringify(config[provider]);
    window.location = `${uri}${query}`;
    dispatch(closeLoginModal());
  };
  return (
    <div className={classes.socialLoginLayout}>
      <div onClick={() => oAuthLogin('facebook')}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="13.125" fill="url(#paint0_linear)" />
          <path
            d="M19.8879 19.014L20.4709 15.3095H16.8236V12.9066C16.8236 11.8928 17.3322 10.9041 18.9658 10.9041H20.625V7.7503C20.625 7.7503 19.1199 7.5 17.6815 7.5C14.6764 7.5 12.7141 9.27463 12.7141 12.486V15.3095H9.375V19.014H12.7141V27.9698C13.3844 28.0725 14.0702 28.125 14.7688 28.125C15.4675 28.125 16.1533 28.0725 16.8236 27.9698V19.014H19.8879Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="15"
              y1="1.875"
              x2="15"
              y2="28.0471"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18ACFE" />
              <stop offset="1" stopColor="#0163E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div onClick={() => oAuthLogin('google')}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0001 11.2445C22.0001 10.34 21.9253 9.68004 21.7632 8.99561H11.2246V13.0778H17.4105C17.2858 14.0923 16.6124 15.62 15.1157 16.6466L15.0948 16.7833L18.4269 19.313L18.6577 19.3356C20.7779 17.4167 22.0001 14.5933 22.0001 11.2445Z"
            fill="#4285F4"
          />
          <path
            d="M11.2245 22C14.2551 22 16.7993 21.0222 18.6576 19.3356L15.1157 16.6466C14.1678 17.2944 12.8957 17.7466 11.2245 17.7466C8.25629 17.7466 5.73703 15.8278 4.83898 13.1756L4.70735 13.1866L1.24258 15.8143L1.19727 15.9378C3.04306 19.5311 6.83446 22 11.2245 22Z"
            fill="#34A853"
          />
          <path
            d="M4.83897 13.1756C4.60201 12.4911 4.46487 11.7577 4.46487 11C4.46487 10.2422 4.60201 9.50886 4.8265 8.82443L4.82022 8.67866L1.31203 6.00867L1.19725 6.06217C0.436514 7.5533 0 9.22778 0 11C0 12.7722 0.436514 14.4466 1.19725 15.9377L4.83897 13.1756Z"
            fill="#FBBC05"
          />
          <path
            d="M11.2245 4.2533C13.3322 4.2533 14.754 5.14552 15.5646 5.89113L18.7324 2.86C16.7869 1.08778 14.2551 0 11.2245 0C6.83446 0 3.04306 2.46887 1.19727 6.06217L4.82651 8.82443C5.73703 6.17221 8.25629 4.2533 11.2245 4.2533Z"
            fill="#EB4335"
          />
        </svg>
      </div>
      <div onClick={() => oAuthLogin('line')}>
        <img className={classes.lineLogo} src={LineIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialLogin;
