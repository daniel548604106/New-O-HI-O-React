import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../../../assets/images/global/O.HI.O-logo-application.svg';
import Button from '../../../components/Global/Button/Button.jsx';
import classes from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);
  // const handleClickNavItem = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const tabs = [
  //   {
  //     name: '擁有設計館的好處',
  //     title: 'advantage',
  //   },
  //   {
  //     name: '合作品牌見證',
  //     title: 'cooperation',
  //   },
  //   {
  //     name: '可販售商品類別',
  //     title: 'availableproducts',
  //   },
  //   {
  //     name: '合作模式及收費',
  //     title: 'cta',
  //   },
  //   {
  //     name: '常見問答',
  //     title: 'faq',
  //   },
  // ];
  return (
    <>
      <div className={classes.headerLayout}>
        <div>
          <img src={Logo} alt="O.HI.O logo" />
          {window.innerWidth > 500 && <h2>我要開 O.HI.O 館</h2>}
        </div>
        <div>
          <Button text="立即申請開館" backgroundColor="#178fac" />
        </div>
      </div>
    </>
  );
};

export default Header;
