import React from 'react';
import planet from '../image/planet.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="logo-container">
        <img src={planet} alt="Logo" className="logo" />
        <h1 className="title">Space Travelers&rsquo; Hub</h1>
      </header>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id} className={link.name}>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
