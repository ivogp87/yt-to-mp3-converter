import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import logo from '../../images/logo.png';
import Container from '../Container';
import SearchBar from '../SearchBar';
import IconButton from '../IconButton';

const Header = ({ withSearchBar, searchTerm, onChange, onSubmit }) => {
  // withSearchBar - if false the search bar is alway hidden
  // showSearchBar = shows/hides the search bar on mobile devices
  // showSearchBar === true: the logo and home icon are hidden too
  const [showSearchBar, setShowSearchBar] = useState(false);
  const header = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showSearchBar) {
      const hideSearchBar = (e) => {
        if (!header.current.contains(e.target)) {
          setShowSearchBar(false);
        }
      };

      document.addEventListener('click', hideSearchBar);

      return () => document.removeEventListener('click', hideSearchBar);
    }
  }, [showSearchBar]);

  const handleSubmit = (e) => {
    onSubmit(e);
    if (showSearchBar) {
      setShowSearchBar(false);
    }
  };

  return (
    <header ref={header} className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          {!showSearchBar && (
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          )}
          <div className={styles.headerContentRight}>
            {withSearchBar && (
              <div className={styles.searchBarContainer}>
                <IconButton
                  title="Hide search bar"
                  className={showSearchBar ? styles.closeButton : styles.displayNone}
                  onClick={() => {
                    setShowSearchBar(false);
                  }}
                  icon="times"
                  type="button"
                  color="primary"
                />
                <SearchBar
                  searchTerm={searchTerm}
                  onSubmit={handleSubmit}
                  onChange={onChange}
                  className={showSearchBar ? '' : styles.searchBarDesktop}
                />
                <IconButton
                  title="Search"
                  className={showSearchBar ? styles.displayNone : styles.searchButton}
                  onClick={() => {
                    setShowSearchBar(true);
                  }}
                  icon="search"
                  type="button"
                  color="primary"
                />
              </div>
            )}
            {!showSearchBar && (
              <Link to="/" title="Go to homepage">
                <FontAwesomeIcon icon="home" size="lg" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  withSearchBar: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
