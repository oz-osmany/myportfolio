import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Layout = () => {
  const changeMenu = () => {
    const menu = document.getElementById('menu');
    const header = document.getElementById('headermenu');

    menu?.classList.toggle('nav__complet');
    header?.classList.toggle('nav__short');
  };
  return (
    <div className="wrapper">
      <div className="nav__hamburger">
        <Menu onClick={() => changeMenu()} className="nav__svg" />
      </div>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
