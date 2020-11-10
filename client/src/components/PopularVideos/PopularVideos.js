import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './PopularVideos.css';
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
    <div className="popular-videos">
      {youTubeData.map((video) => {
        return (
          <VideoPreview
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishedAt}
            videoViews={video.statistics.viewCount}
          />
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
