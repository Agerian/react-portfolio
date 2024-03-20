import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1>AdrianO</h1>
      <Navigation />
    </header>
  )
}

export default Header;