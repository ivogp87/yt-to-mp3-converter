import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatNumber, formatDate } from '../../helpers';
import './VideoPreview.css';

const VideoPreview = ({ id, title, publishedAt, thumbnail, views, channelTitle }) => {
  return (
    <Link to={`/download/${id}`} className="video-preview">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{channelTitle}</p>
      <div className="row-nowrap">
        <span>
          {formatNumber(Number(views))}
          &nbsp; views
        </span>
        <span>{formatDate(new Date(publishedAt))}</span>
      </div>
    </Link>
  );
};

VideoPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
};

export default VideoPreview;
