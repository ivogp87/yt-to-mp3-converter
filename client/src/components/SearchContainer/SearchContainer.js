import React from 'react';
import './SearchContainer.css';
import SearchForm from '../SearchForm';

const SearchContainer = () => {
  return (
    <div className="search-container bg-dark text-primary">
      <div className="container padding-2">
        <header>
          <h1>YouTube To MP3 Converter</h1>
          <p>Start by searching for videos below. Its free, fast and simple.</p>
        </header>
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchContainer;
