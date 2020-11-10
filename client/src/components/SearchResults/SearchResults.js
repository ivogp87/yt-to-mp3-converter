import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import youTube from '../../apis/youTube';
import useYouTubeData from '../../hooks/useYouTubeData';
import VideoPreview from '../VideoPreview';

const SearchResults = ({ searchTerm, maxResults }) => {
  const findVideos = useCallback(() => youTube.searchByKeyword(searchTerm, maxResults), [
    searchTerm,
    maxResults,
  ]);

  const [isLoading, error, youTubeData] = useYouTubeData(findVideos);

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
      {youTubeData.map((searchResult) => {
        return (
          <VideoPreview
            key={searchResult.id.videoId}
            id={searchResult.id.videoId}
            title={searchResult.snippet.title}
            thumbnail={searchResult.snippet.thumbnails.medium.url}
            description={searchResult.snippet.description}
            channelTitle={searchResult.snippet.channelTitle}
            publishTime={searchResult.snippet.publishTime}
          />
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  maxResults: PropTypes.number,
};

SearchResults.defaultProps = {
  maxResults: 20,
};

export default SearchResults;
