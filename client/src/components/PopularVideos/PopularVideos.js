import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PopularVideos.css';
import { getPopularVideos } from '../../apis/youTube';
import VideoPreview from '../VideoPreview';

const PopularVideos = ({ videoCategoryId, maxResults }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [popularVideos, setPopularVideos] = useState([]);

  // Fetch the videos from YouTube
  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = await getPopularVideos(videoCategoryId, maxResults);

      if (videoData instanceof Error) {
        setError(true);
        setIsLoading(false);
      } else {
        setPopularVideos(videoData.items);
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [videoCategoryId, maxResults]);

  // Loading
  if (isLoading) return <div>Loading...</div>;

  // Error
  if (error) return <div>Something went wrong. Please try again.</div>;

  // Return the popular videos
  return (
    <div className="popular-videos">
      {popularVideos.map((video) => {
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
