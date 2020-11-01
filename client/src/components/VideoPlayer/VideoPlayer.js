import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faUser,
  faComment,
  faEye,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import { getVideoById } from '../../apis/youTube';
import { formatNumber, formatDate } from '../../helpers';
import './VideoPlayer.css';

const VideoPlayer = ({ videoId, autoPlay }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});

  // Fetch the video info from YouTube
  useEffect(() => {
    const fetchVideoInfo = async () => {
      const videoData = await getVideoById(videoId);

      if (videoData instanceof Error) {
        setError(true);
        setIsLoading(false);
      } else {
        setVideoInfo(videoData.items[0]);
        setIsLoading(false);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  // Render the video tags/keywords
  const renderVideoTags = () => {
    // Return null if there are no tags (empty array)
    if (!videoInfo.snippet.tags.length) return null;

    // Render only the firs three tags
    return videoInfo.snippet.tags.slice(0, 3).map((tag) => {
      const urlEncodedTag = encodeURIComponent(tag).replace(/%20/gi, '+');
      return (
        <Link key={tag} to={`/search?term=%23${urlEncodedTag}`}>
          {tag}
        </Link>
      );
    });
  };

  // Render the video description
  const renderVideoDescription = () => {
    // Check if the description is not empty
    if (videoInfo.snippet.description.length) {
      // Split the description on new line (\n)
      const descriptionLines = videoInfo.snippet.description.split('\n');
      return (
        <div className="video-description padding-y-2">
          {descriptionLines.map((textLine, index) => (
            <p key={index}>{textLine}</p>
          ))}
        </div>
      );
    }

    // Empty description?
    return null;
  };

  // Loading
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Error
  if (error) {
    return <div>Something went wrong. Please try again.</div>;
  }

  // Return the video player and info if everything's OK
  return (
    <div className="video-player">
      <div className="video-iframe">
        <iframe
          title={videoInfo.snippet.title}
          width="100%"
          height="auto"
          src={`https://www.youtube-nocookie.com/embed/${videoInfo.id}?autoplay=${autoPlay}`}
          frameBorder="0"
          autoPlay="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-info">
        <div className="video-tags text-secondary">{renderVideoTags()}</div>
        <h1 className="video-title">{videoInfo.snippet.title}</h1>
        <div className="video-meta">
          <div className="meta-text">
            <span>
              <FontAwesomeIcon icon={faEye} />
              {formatNumber(Number(videoInfo.statistics.viewCount))}
              &nbsp; views
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarWeek} />
              {formatDate(new Date(videoInfo.snippet.publishedAt))}
            </span>
          </div>
          <div className="meta-stats">
            <span title="Likes">
              <FontAwesomeIcon icon={faThumbsUp} />
              {formatNumber(Number(videoInfo.statistics.likeCount))}
            </span>
            <span title="Dislikes">
              <FontAwesomeIcon icon={faThumbsDown} />
              {formatNumber(Number(videoInfo.statistics.dislikeCount))}
            </span>
            <span title="Comments">
              <FontAwesomeIcon icon={faComment} />
              {formatNumber(Number(videoInfo.statistics.commentCount))}
            </span>
          </div>
        </div>
        <a
          className="channel-byline"
          title={`Visit ${videoInfo.snippet.channelTitle}'s YouTube Channel`}
          href={`https://www.youtube.com/channel/${videoInfo.snippet.channelId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faUser} />
          {videoInfo.snippet.channelTitle}
        </a>
        {renderVideoDescription()}
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  autoPlay: false,
};

export default VideoPlayer;
