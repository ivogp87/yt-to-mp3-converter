import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faSearch, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../NavBar.module.scss';
import SearchBar from '../../SearchBar';
import Button from '../../Button';

const NavBarItems = ({ showSearchBar, setShowSearchBar, pathname }) => {
  // Don't render the component on the homepage
  if (pathname === '/') return null;

  const handleCloseIconClick = () => setShowSearchBar(false);
  const handleSearchIconClick = () => setShowSearchBar(true);

  return (
    <>
      {
        // Close button - hides the search bar. Hidden by default. Displayed only on mobile when the search bar is open
        showSearchBar && (
          <li className={styles.menuItem}>
            <Button
              icon={faTimes}
              onClick={handleCloseIconClick}
              variant="text"
              color="secondary"
              size="small"
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
            {/* Search Icon - opens the search bar on mobile */}
            <li className={`${styles.menuItem} ${styles.searchBtn}`}>
              <Button
                icon={faSearch}
                onClick={handleSearchIconClick}
                variant="text"
                color="secondary"
                size="small"
              />
            </li>
            {/* Home icon */}
            <li className={styles.menuItem}>
              <Link className={styles.link} to="/" title="Home">
                <Button icon={faHome} variant="text" color="secondary" size="small" />
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
