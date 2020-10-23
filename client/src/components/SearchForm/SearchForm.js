import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { push } = useHistory();

  // Navigate to search results page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Url encode the search term
    const encodedTerm = encodeURI(searchTerm).replace(/%20/gi, '+');

    // Redirect to the search results
    push(`/search?term=${encodedTerm}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={searchTerm} placeholder="Search here" />
      <button className="btn" type="submit">
        <FontAwesomeIcon icon={faSearch} size="lg" className="text-secondary" />
      </button>
    </form>
  );
};

export default SearchForm;
