import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import youTube from '../../apis/youTube';
import useYouTubeData from '../../hooks/useYouTubeData';
import VideoPreview from '../VideoPreview';

const RelatedVideos = ({ videoId, maxResults }) => {
  const getRelatedVideos = useCallback(() => youTube.getRelatedVideos(videoId, maxResults), [
    videoId,
    maxResults,
  ]);

  const [isLoading, error, youTubeData] = useYouTubeData(getRelatedVideos);

  // Loading
  if (isLoading) return <div>Loading...</div>;

  // Error
  if (error) return <div>Something went wrong. Please try again.</div>;

  // Render related videos
  return (
    <div className="related-videos">
      {youTubeData.map((video) => {
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
  maxResults: PropTypes.number,
};

RelatedVideos.defaultProps = {
  maxResults: 20,
};

export default RelatedVideos;
