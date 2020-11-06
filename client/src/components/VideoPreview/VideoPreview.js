import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './VideoPreview.css';
import { formatDate, formatNumber, decodeHtmlEntities } from '../../helpers';

const VideoPreview = ({
  id,
  title,
  thumbnail,
  description,
  channelTitle,
  publishTime,
  videoViews,
}) => {
  return (
    <Link className="video-preview" to={`/download/${id}`} title={title}>
      <div className="video-thumbnail">
        <img className="thumbnail-img" src={thumbnail} alt={`${title} video thumbnail`} />
      </div>
      <div className="video-details">
        <h2 className="video-title">{decodeHtmlEntities(title)}</h2>
        <div className="row video-meta">
          <p className="channel-name">{channelTitle}</p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {videoViews && <p className="video-views">{formatNumber(Number(videoViews))} views</p>}
          <p className="publish-time">{formatDate(new Date(publishTime))}</p>
        </div>
        {description && <p className="video-description">{description}</p>}
      </div>
    </Link>
  );
};

VideoPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string,
  channelTitle: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  videoViews: PropTypes.string,
};

VideoPreview.defaultProps = {
  description: null,
  videoViews: null,
};

export default VideoPreview;
