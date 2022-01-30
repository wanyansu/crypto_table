import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="topLeft">
        <ul className="navList">
          <li className="nav-item">
            <Link className="link" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="fas fa-bars topIcon"></i>
      </div>
    </nav>
  )
};

export default Navbar;
