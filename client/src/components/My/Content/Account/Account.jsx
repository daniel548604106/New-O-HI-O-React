import React, { useEffect } from 'react';
import About from './About/About.jsx';
import General from './General/General.jsx';
import { useLocation } from 'react-router-dom';
const Account = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div>
      {location.search.includes('about') && <About />}
      {!location.search && <General />}
    </div>
  );
};

export default Account;
