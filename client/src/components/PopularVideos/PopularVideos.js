import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './PopularVideos.module.scss';
import youTube from '../../apis/youTube';
import useYouTubeData from '../../hooks/useYouTubeData';
import VideoPreview from '../VideoPreview';

const PopularVideos = ({ videoCategoryId, maxResults }) => {
  const getPopularVideos = useCallback(
    () => youTube.getPopularVideos(videoCategoryId, maxResults),
    [videoCategoryId, maxResults]
  );

  const [isLoading, error, youTubeData] = useYouTubeData(getPopularVideos);

  // Loading
  if (isLoading) return <div>Loading...</div>;

  // Error
  if (error) return <div>Something went wrong. Please try again.</div>;

  // Return the popular videos
  return (
    <div className={styles.popularVideos}>
      {youTubeData.map((video) => {
        return (
          <div className={styles.video} key={video.id}>
            <VideoPreview
              direction="column"
              id={video.id}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
              channelTitle={video.snippet.channelTitle}
              publishTime={video.snippet.publishedAt}
              views={video.statistics.viewCount}
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
