import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';
import { parseQueryString } from '../../helpers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState('Search here');

  // Keep the searchTerm in sync with the url
  const { search } = useLocation();
  useEffect(() => {
    // Check if there is search term in the query string and update the state
    const queryString = parseQueryString(search);
    if (queryString) {
      const decodedTerm = decodeURIComponent(queryString).replace(/\+/gi, ' ');
      setSearchTerm(decodedTerm);
    }
  }, [search]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { push } = useHistory();

  // Navigate to search results page
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      setPlaceholder('Please enter search term');
    } else {
      // Url encode the search term
      const encodedTerm = encodeURIComponent(searchTerm).replace(/%20/gi, '+');

      // Redirect to the search results
      push(`/search?term=${encodedTerm}`);
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        className={styles.searchForm}
        onChange={handleChange}
        type="text"
        value={searchTerm}
        placeholder={placeholder}
      />
      <button className={styles.searchBtn} type="submit">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  );
};

export default SearchBar;
