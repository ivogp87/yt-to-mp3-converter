import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './RelatedVideos.module.scss';
import youTube from '../../apis/youTube';
import ComponentStatus from '../ComponentStatus';
import useYouTubeData from '../../hooks/useYouTubeData';
import VideoPreview from '../VideoPreview';

const RelatedVideos = ({ videoId, maxResults }) => {
  const getRelatedVideos = useCallback(() => youTube.getRelatedVideos(videoId, maxResults), [
    videoId,
    maxResults,
  ]);

  const [isLoading, error, youTubeData] = useYouTubeData(getRelatedVideos);

  // Loading
  if (isLoading) return <ComponentStatus status="loading" message="Loading..." />;

  // Error
  if (error) return <ComponentStatus status="error" message="We can't find any related videos..." />;

  // Render related videos
  return youTubeData.map((video) => {
    return (
      <div className={styles.relatedVideo} key={video.id.videoId}>
        <VideoPreview
          direction="row"
          id={video.id.videoId}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          publishTime={video.snippet.publishTime}
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
