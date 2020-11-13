import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../NavBar.module.scss';
import SearchBar from '../../SearchBar';

const NavBarItems = ({ showSearchBar, setShowSearchBar, pathname }) => {
  // Don't render the component on the homepage
  if (pathname === '/') return null;

  return (
    <>
      {
        // Close button - hides the search bar. Hidden by default. Displayed only on mobile when the search bar is open
        showSearchBar && (
          <li className={styles.menuItem}>
            <FontAwesomeIcon
              onClick={() => setShowSearchBar(false)}
              className={styles.icon}
              icon={faTimes}
              size="2x"
            />
          </li>
        )
      }

      {/* Search bar - hidden by default on mobile */}
      <li
        className={`${styles.menuItem} ${
          showSearchBar ? `${styles.searchBar} ${styles.displayBlock}` : styles.searchBar
        }`}
      >
        <SearchBar />
      </li>
      {
        // Search and home icons - hidden on mobile when the search bar is open
        !showSearchBar && (
          <>
            <li className={`${styles.menuItem} ${styles.searchBtn}`}>
              <FontAwesomeIcon
                onClick={() => setShowSearchBar(true)}
                className={styles.icon}
                icon={faSearch}
                size="lg"
              />
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.link} to="/" title="Home">
                <FontAwesomeIcon className={styles.icon} icon={faHome} size="lg" />
              </Link>
            </li>
          </>
        )
      }
    </>
  );
};

NavBarItems.propTypes = {
  showSearchBar: PropTypes.bool.isRequired,
  setShowSearchBar: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default NavBarItems;
