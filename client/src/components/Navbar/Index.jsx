import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">KB-booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
