import React, { useEffect } from 'react';
import Header from '../../components/Application/Header/Header.jsx';
import Hero from '../../components/Application/Hero/Hero.jsx';
import Advantage from '../../components/Application/Advantage/Advantage.jsx';
import AOS from 'aos';
const Application = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <div data-aos="fade-up" data-aos-duration="3000">
        <Advantage />
      </div>
    </div>
  );
};

export default Application;
