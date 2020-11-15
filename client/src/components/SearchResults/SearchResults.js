import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.module.scss';
import youTube from '../../apis/youTube';
import useYouTubeData from '../../hooks/useYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoPreview from '../VideoPreview';

const SearchResults = ({ searchTerm, maxResults }) => {
  const findVideos = useCallback(() => youTube.searchByKeyword(searchTerm, maxResults), [
    searchTerm,
    maxResults,
  ]);

  const [isLoading, error, youTubeData] = useYouTubeData(findVideos);

  // Loading
  if (isLoading) {
    return <ComponentStatus status="loading" message="Loading" />;
  }

  // Error
  if (error) {
    return (
      <ComponentStatus
        status="error"
        message="Something went wrong. Please try searching again..."
      />
    );
  }

  return (
    <>
      {youTubeData.map((searchResult) => {
        return (
          <div className={styles.searchResult} key={searchResult.id.videoId}>
            <VideoPreview
              direction="row"
              id={searchResult.id.videoId}
              title={searchResult.snippet.title}
              thumbnail={searchResult.snippet.thumbnails.medium.url}
              description={searchResult.snippet.description}
              channelTitle={searchResult.snippet.channelTitle}
              publishTime={searchResult.snippet.publishTime}
            />
          </div>
        );
      })}
    </>
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
