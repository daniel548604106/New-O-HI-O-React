import React from 'react';
import About from '../../../components/My/Content/Setting/About/About.jsx';
import General from '../../../components/My/Content/Setting/General/General.jsx';
import { useLocation } from 'react-router-dom';
const Setting = () => {
  const location = useLocation();

  return (
    <div>
      {location.search.includes('about') && <About />}
      {!location.search && <General />}
    </div>
  );
};

export default Setting;
