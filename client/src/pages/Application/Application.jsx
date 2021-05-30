import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Application/Header/Header.jsx';
import Hero from '../../components/Application/Hero/Hero.jsx';
import Advantage from '../../components/Application/Advantage/Advantage.jsx';
import Cooperation from '../../components/Application/Cooperation/Cooperation.jsx';
import AvailableProducts from '../../components/Application/AvailableProducts/AvailableProducts.jsx';
import FAQ from '../../components/Application/FAQ/FAQ.jsx';
import CTA from '../../components/Application/CTA/CTA.jsx';
import classes from './Application.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

const Application = () => {
  const [activeTab, setActiveTab] = useState('advantage');
  const location = useLocation();
  const advantage = useRef(null);
  const cooperation = useRef(null);
  const available = useRef(null);
  const cta = useRef(null);
  const faq = useRef(null);

  const tabs = [
    {
      name: '擁有設計館的好處',
      title: 'advantage',
      ref: advantage,
    },
    {
      name: '合作品牌見證',
      title: 'cooperation',
      ref: cooperation,
    },
    {
      name: '可販售商品類別',
      title: 'availableproducts',
      ref: available,
    },
    {
      name: '合作模式及收費',
      title: 'cta',
      ref: cta,
    },
    {
      name: '常見問答',
      title: 'faq',
      ref: faq,
    },
  ];
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // tabs.forEach((tab) => console.log(tab.ref.current.id));
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClickNavItem = (ref, title) => {
    location.hash = title;
    setActiveTab(title);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <div className={classes.applicationLayout}>
      <Header />
      <div className={classes.tabsLayout}>
        <div>
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              onClick={() => handleClickNavItem(tab.ref, tab.title)}
              className={activeTab === tab.title && classes.active}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
      <Hero />
      <section id="advantage" ref={advantage} data-aos="fade-up" data-aos-duration="3000">
        <Advantage />
      </section>
      <section
        id="cooperation"
        ref={cooperation}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Cooperation />
      </section>
      <section
        id="availableproducts"
        ref={available}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <AvailableProducts />
      </section>
      <section
        id="cta"
        ref={cta}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <CTA />
      </section>
      <section
        id="faq"
        ref={faq}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <FAQ />
      </section>
    </div>
  );
};

export default Application;
