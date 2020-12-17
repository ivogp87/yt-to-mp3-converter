import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.module.scss';
import { searchForVideosEndpoint } from '../../apis/youTube';
import useFetchYouTubeData from '../../hooks/useFetchYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoPreview from '../VideoPreview';

const SearchResults = ({ searchTerm, maxResults }) => {
  const apiUrl = searchForVideosEndpoint(searchTerm, maxResults);
  const [isLoading, error, youTubeData] = useFetchYouTubeData(apiUrl);

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
      {youTubeData.map(({ id, title, thumbnail, description, channelTitle, publishedAt }) => {
        return (
          <div className={styles.searchResult} key={id}>
            <VideoPreview
              direction="row"
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              channelTitle={channelTitle}
              publishedAt={publishedAt}
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
