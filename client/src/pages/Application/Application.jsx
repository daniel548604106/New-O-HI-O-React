import React, { useEffect } from 'react';
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

const Application = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={classes.applicationLayout}>
      <Header />
      <Hero />
      <section data-aos="fade-up" data-aos-duration="3000">
        <Advantage />
      </section>
      <section data-aos="fade-up " data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <Cooperation />
      </section>
      <section data-aos="fade-up " data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <AvailableProducts />
      </section>
      <section data-aos="fade-up " data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <CTA />
      </section>
      <section data-aos="fade-up " data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <FAQ />
      </section>
    </div>
  );
};

export default Application;
