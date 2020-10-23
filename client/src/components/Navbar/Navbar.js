import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../images/logo.png';
import SearchForm from '../SearchForm';

const Navbar = () => {
  // By default the search form (in the menu) is visible on desktop and tablets and hidden on smaller screens
  // Also the search form, home and search icons are not shown on the homepage

  // Show/hide search on small screens (also shows/hides the logo and home link)
  const [showSearch, setShowSearch] = useState(false);

  // Create reference to the menu (.navbar)
  const menu = useRef(null);

  // Close the search form on click outside (on mobile devices)
  useEffect(() => {
    // Add event listener only if the search form is opened
    if (showSearch) {
      const hideSearch = (e) => {
        // Don't hide the search form if the click is somewhere within the menu
        if (!menu.current.contains(e.target)) setShowSearch(false);
      };

      document.addEventListener('click', hideSearch);

      // Clean up
      return () => {
        document.removeEventListener('click', hideSearch);
      };
    }

    return null;
  }, [showSearch]);

  // Render additional menu items on inner pages (search from, home button, etc).
  // Some items are hidden by default, some are hidden on mobile screens
  const { pathname } = useLocation();
  const renderMenuItems = () => {
    if (pathname !== '/') {
      return (
        <>
          <li className={showSearch ? 'display-block' : 'back-btn'}>
            <button onClick={() => setShowSearch(false)} className="btn bg-dark" type="button">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </li>
          <li className={showSearch ? 'form display-block' : 'form'}>
            <SearchForm />
          </li>
          {!showSearch && (
            <>
              <li className="search-btn">
                <button onClick={() => setShowSearch(true)} className="btn bg-dark" type="button">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </button>
              </li>
              <li>
                <Link to="/" title="Home">
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </Link>
              </li>
            </>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <nav ref={menu} className="navbar bg-dark">
      <div className="container padding-x-2">
        <ul>
          {!showSearch && (
            <li className="logo">
              <Link to="/" title="Home">
                <img src={logo} alt="logo" />
              </Link>
            </li>
          )}
          {renderMenuItems()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
