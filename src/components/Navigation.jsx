import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <NavLink to="/">About Me</NavLink>
      </ul>
    </nav>
  )
}

export default Navigation;