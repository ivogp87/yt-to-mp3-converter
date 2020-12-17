import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopularVideos.module.scss';
import { popularVideosEndpoint } from '../../apis/youTube';
import useFetchYouTubeData from '../../hooks/useFetchYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoPreview from '../VideoPreview';

const PopularVideos = ({ videoCategoryId, maxResults }) => {
  const apiUrl = popularVideosEndpoint(videoCategoryId, maxResults);
  const [isLoading, error, youTubeData] = useFetchYouTubeData(apiUrl);

  // Loading
  if (isLoading) return <ComponentStatus status="loading" message="Loading..." />;

  // Error
  if (error)
    return <ComponentStatus status="error" message="We can't display any videos right now..." />;

  // Return the popular videos
  return (
    <div className={styles.popularVideos}>
      {youTubeData.map(({ id, title, thumbnail, channelTitle, publishedAt, viewCount }) => {
        return (
          <div className={styles.video} key={id}>
            <VideoPreview
              direction="column"
              id={id}
              title={title}
              thumbnail={thumbnail}
              channelTitle={channelTitle}
              publishedAt={publishedAt}
              views={viewCount}
            />
          </div>
        );
      })}
    </div>
  );
};

PopularVideos.propTypes = {
  videoCategoryId: PropTypes.number,
  maxResults: PropTypes.number,
};

PopularVideos.defaultProps = {
  videoCategoryId: 10,
  maxResults: 20,
};

export default PopularVideos;
