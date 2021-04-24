import React from 'react';
import { ReactComponent as Menu } from '../assets/images/menu.svg';

const Nav = () => {
  return (
    <header className="flex items-center p-10px justify-center">
      <Menu />
    </header>
  );
};

export default Nav;
