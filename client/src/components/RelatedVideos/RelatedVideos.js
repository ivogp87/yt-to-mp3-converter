import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import youTube from '../../apis/youTube';
import VideoPreview from '../VideoPreview';

const RelatedVideos = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);

  // Fetch the related videos from YouTube
  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const videoData = await youTube.getRelatedVideos(videoId);

      if (videoData instanceof Error) {
        setError(true);
        setIsLoading(false);
      } else {
        setRelatedVideos(videoData.items);
        setIsLoading(false);
      }
    };

    fetchRelatedVideos();
  }, [videoId]);

  // Loading
  if (isLoading) return <div>Loading...</div>;

  // Error
  if (error) return <div>Something went wrong. Please try again.</div>;

  // Render related videos
  return (
    <div className="related-videos">
      {relatedVideos.map((video) => {
        return (
          <VideoPreview
            key={video.id.videoId}
            id={video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishTime}
          />
        );
      })}
    </div>
  );
};

RelatedVideos.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default RelatedVideos;
