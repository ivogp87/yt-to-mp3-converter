import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { parseQueryString } from '../../helpers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Keep the searchTerm in sync with the url
  const { search } = useLocation();
  useEffect(() => {
    // Check if there is search term in the query string and update the state
    const queryString = parseQueryString(search);
    if (queryString) setSearchTerm(queryString);
  }, [search]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { push } = useHistory();

  // Navigate to search results page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Url encode the search term
    const encodedTerm = encodeURIComponent(searchTerm).replace(/%20/gi, '+');

    // Redirect to the search results
    push(`/search?term=${encodedTerm}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={searchTerm} placeholder="Search here" />
      <button className="btn" type="submit">
        <FontAwesomeIcon icon={faSearch} size="lg" className="text-secondary" />
      </button>
    </form>
  );
};

export default SearchBar;
