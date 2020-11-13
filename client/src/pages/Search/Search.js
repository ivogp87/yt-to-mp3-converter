import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import { parseQueryString } from '../../helpers';
import SearchResults from '../../components/SearchResults';
import Container from '../../components/Container';

const Search = ({ location: { search } }) => {
  const searchTerm = parseQueryString(search);

  // No query string in the url
  if (!searchTerm) {
    return <div>Please enter search term</div>;
  }

  return (
    <main>
      <Container>
        <div className={styles.searchResultsContainer}>
          <SearchResults searchTerm={searchTerm} />
        </div>
      </Container>
    </main>
  );
};

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Search;
