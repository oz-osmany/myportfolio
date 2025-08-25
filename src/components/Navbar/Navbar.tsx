import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const bgClass = location.pathname === '/about' && 'bg-[#474f60]';

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div id="headermenu" className="w-[92px] lg:w-[190px] ">
          <nav className={`nav nav__bg ${bgClass}`} id="menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
