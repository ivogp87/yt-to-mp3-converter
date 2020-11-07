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
import Linkify from 'react-linkify';
import './VideoInfo.css';
import { formatNumber, formatDate } from '../../helpers';
import { getVideoById } from '../../apis/youTube';

const VideoInfo = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);

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

    // Render only the first three tags
    return videoInfo.snippet.tags.slice(0, 3).map((tag) => {
      const urlEncodedTag = encodeURIComponent(tag).replace(/%20/gi, '+');
      return (
        <Link className="video-tag" key={tag} to={`/search?term=%23${urlEncodedTag}`}>
          {tag}
        </Link>
      );
    });
  };

  // Render show more/less button
  const renderShowMoreBtn = (descriptionItems) => {
    // Don't render the button if there are less than 3 items
    if (descriptionItems.length <= 3) return null;

    // render the button
    const buttonText = showFullDescription ? 'Show Less' : 'Show More';

    return (
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          setShowFullDescription(!showFullDescription);
        }}
        className="btn show-description-btn"
        type="button"
      >
        {buttonText}
      </button>
    );
  };

  // Render the video description
  const renderVideoDescription = () => {
    // Empty description
    if (!videoInfo.snippet.description.length) return null;

    // Render the description

    // Split the description on new line (\n)
    const descriptionItems = videoInfo.snippet.description.split('\n');

    // Show only 3 lines from the description by default
    const itemsToShow = showFullDescription ? descriptionItems.length : 3;

    // Linkify component decorator
    const componentDecorator = (href, text) => {
      return (
        <a href={href} target="_blank" rel="nofollow noopener noreferrer">
          {text}
        </a>
      );
    };

    return (
      <div className="margin-y-2 video-description">
        {descriptionItems.slice(0, itemsToShow).map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p className="description-text" key={index}>
            <Linkify componentDecorator={componentDecorator}>{item}</Linkify>
          </p>
        ))}
        {renderShowMoreBtn(descriptionItems)}
      </div>
    );
  };

  // Loading
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Error
  if (error) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return (
    <div className="video-info">
      <div className="video-tags text-secondary">{renderVideoTags()}</div>
      <h1 className="video-title">{videoInfo.snippet.title}</h1>
      {/* Video stats - views, likes, etc */}
      <div className="row video-stats">
        <div className="row video-stats-main">
          <p className="video-views">
            <FontAwesomeIcon className="icon" icon={faEye} />
            {formatNumber(Number(videoInfo.statistics.viewCount))}
            &nbsp; views
          </p>
          <p className="publish-date">
            <FontAwesomeIcon className="icon" icon={faCalendarWeek} />
            {formatDate(new Date(videoInfo.snippet.publishedAt))}
          </p>
        </div>
        <div className="row video-stats-secondary">
          <p className="video-likes" title="Likes">
            <FontAwesomeIcon className="icon" icon={faThumbsUp} />
            {formatNumber(Number(videoInfo.statistics.likeCount))}
          </p>
          <p className="video-dislikes" title="Dislikes">
            <FontAwesomeIcon className="icon" icon={faThumbsDown} />
            {formatNumber(Number(videoInfo.statistics.dislikeCount))}
          </p>
          <p className="video-comments" title="Comments">
            <FontAwesomeIcon className="icon" icon={faComment} />
            {formatNumber(Number(videoInfo.statistics.commentCount))}
          </p>
        </div>
      </div>
      <a
        className="margin-y-1 channel-title"
        title={`Visit ${videoInfo.snippet.channelTitle}'s YouTube Channel`}
        href={`https://www.youtube.com/channel/${videoInfo.snippet.channelId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faUser} />
        {videoInfo.snippet.channelTitle}
      </a>
      {renderVideoDescription()}
    </div>
  );
};

VideoInfo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoInfo;
