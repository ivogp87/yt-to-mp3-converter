import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchByKeyword } from '../../apis/youTube';
import SearchResult from '../SearchResult';

const SearchResults = ({ searchTerm }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch the search results from YT
  useEffect(() => {
    const fetchResults = async () => {
      const data = await searchByKeyword(searchTerm);
      if (data instanceof Error) {
        setError(true);
        setIsLoading(false);
      } else {
        setSearchResults(data.items);
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  // Loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error
  if (error) {
    return <div>Something went wrong. Please try again</div>;
  }

  return (
    <div className="search-results">
      {searchResults.map((searchResult) => {
        return (
          <SearchResult
            key={searchResult.id.videoId}
            id={searchResult.id.videoId}
            title={searchResult.snippet.title}
            thumbnail={searchResult.snippet.thumbnails.medium.url}
            description={searchResult.snippet.description}
            channelId={searchResult.snippet.channelId}
            channelTitle={searchResult.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default SearchResults;
