import React from 'react';
import './SearchContainer.css';
import SearchBar from '../SearchBar';

const SearchContainer = () => {
  return (
    <div className="search-container bg-dark text-primary">
      <header>
        <h1>YouTube To MP3 Converter</h1>
        <p>Start by searching for videos below. Its free, fast and simple.</p>
      </header>
      <SearchBar />
    </div>
  );
};

export default SearchContainer;
