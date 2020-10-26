import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../components/SearchResults';

const Search = ({ location: { search } }) => {
  // Check if the query string have "?term=" and parse the search term
  const haveTerm = search.includes('?term=');
  const searchTerm = search.replace('?term=', '');

  // No query string in the url
  if (!haveTerm || searchTerm === '') {
    return <div>Please enter search term</div>;
  }

  return (
    <main className="container padding-2">
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
};

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Search;
