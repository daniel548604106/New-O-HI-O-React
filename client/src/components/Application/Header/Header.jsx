import React, { useState } from 'react';
import Logo from '../../../assets/images/global/O.HI.O-logo-application.svg';
import Button from '../../../components/Global/Button/Button.jsx';
import classes from './Header.module.scss';
const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: '擁有設計館的好處',
    },
    {
      name: '合作品牌見證',
    },
    {
      name: '可販售商品類別',
    },
    {
      name: '合作模式及收費',
    },
    {
      name: '常見問答',
    },
  ];
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
      <div className={classes.tabsLayout}>
        <div>
          {tabs.map((tab, index) => (
            <a
              onClick={() => setActiveTab(index)}
              key={tab.name}
              className={index === activeTab && classes.active}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;