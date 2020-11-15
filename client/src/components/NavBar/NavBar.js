import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import styles from './NavBar.module.scss';
import Container from '../Container';
import logo from '../../images/logo.png';
// eslint-disable-next-line import/no-unresolved
import NavBarItems from './NavBarItems';

const NavBar = () => {
  const { pathname, search } = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(false); // The search bar is hidden by default on small screens
  const menu = useRef(null); // Create reference to the menu

  // Close the search bar on click outside of the menu
  useEffect(() => {
    // Add event listener only if the search bar is open
    if (showSearchBar) {
      const hideSearchBar = (e) => {
        // Don't hide the search form if the click is somewhere within the menu
        if (!menu.current.contains(e.target)) {
          e.preventDefault();
          setShowSearchBar(false);
        }
      };

      document.addEventListener('click', hideSearchBar);

      // Clean up
      return () => {
        document.removeEventListener('click', hideSearchBar);

        // Close the search bar when the url or/and the query string changes
        setShowSearchBar(false);
      };
    }

    return null;
  }, [showSearchBar, pathname, search]);

  return (
    <nav ref={menu} className={styles.navbar}>
      <Container>
        <ul className={styles.menu}>
          {
            // Logo - hidden on mobile when the search bar is open
            !showSearchBar && (
              <li className={`${styles.menuItem} ${styles.logo}`}>
                <Link className={styles.link} to="/" title="Home">
                  <img className={styles.img} src={logo} alt="logo" />
                </Link>
              </li>
            )
          }

          {/* Additional NavBar items (search bar, home icon, etc) - rendered only on inner pages */}
          <NavBarItems
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
            pathname={pathname}
          />
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
