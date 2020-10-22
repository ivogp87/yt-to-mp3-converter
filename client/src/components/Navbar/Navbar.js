import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-primary">
      <div className="container px-2">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>Placeholder</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
