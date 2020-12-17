import React from 'react';
import PropTypes from 'prop-types';
import styles from './RelatedVideos.module.scss';
import { relatedVideosEndpoint } from '../../apis/youTube';
import useFetchYouTubeData from '../../hooks/useFetchYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoPreview from '../VideoPreview';

const RelatedVideos = ({ videoId, maxResults }) => {
  const apiUrl = relatedVideosEndpoint(videoId, maxResults);
  const [isLoading, error, youTubeData] = useFetchYouTubeData(apiUrl);

  // Loading
  if (isLoading) return <ComponentStatus status="loading" message="Loading..." />;

  // Error
  if (error)
    return <ComponentStatus status="error" message="We can't find any related videos..." />;

  // Render related videos
  return youTubeData.map(({ id, title, thumbnail, channelTitle, publishedAt }) => {
    return (
      <div className={styles.relatedVideo} key={id}>
        <VideoPreview
          direction="row"
          id={id}
          title={title}
          thumbnail={thumbnail}
          channelTitle={channelTitle}
          publishedAt={publishedAt}
        />
      </div>
    );
  });
};

RelatedVideos.propTypes = {
  videoId: PropTypes.string.isRequired,
  maxResults: PropTypes.number,
};

RelatedVideos.defaultProps = {
  maxResults: 20,
};

export default RelatedVideos;
