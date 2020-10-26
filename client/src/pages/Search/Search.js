import React from 'react';
import PropTypes from 'prop-types';
import { parseQueryString } from '../../helpers';
import SearchResults from '../../components/SearchResults';

const Search = ({ location: { search } }) => {
  const searchTerm = parseQueryString(search);

  // No query string in the url
  if (!searchTerm) {
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
