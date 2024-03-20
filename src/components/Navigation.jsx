import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
      <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;