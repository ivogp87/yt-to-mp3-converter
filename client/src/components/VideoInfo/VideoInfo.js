/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './VideoInfo.module.scss';
import formatDate from '../../helpers/formatDate';
import formatNumber from '../../helpers/formatNumber';

const VideoInfo = ({
  videoTitle,
  channelTitle,
  publishedAt,
  viewCount,
  likeCount,
  dislikeCount,
  commentCount,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className={styles.videoTitle}>{videoTitle}</h2>
      <div className={styles.videoStats}>
        <div className={styles.videoStatsPrimary}>
          <span>
            <FontAwesomeIcon icon="eye" className={styles.icon} />
            {formatNumber(viewCount)} views
          </span>
          <span>
            <FontAwesomeIcon icon="calendar-week" className={styles.icon} />
            {formatDate(publishedAt)}
          </span>
        </div>
        <div className={styles.videoStatsSecondary}>
          <span>
            <FontAwesomeIcon icon="thumbs-up" className={styles.icon} />
            {formatNumber(likeCount)}
          </span>
          <span>
            <FontAwesomeIcon icon="thumbs-down" className={styles.icon} />
            {formatNumber(dislikeCount)}
          </span>
          <span>
            <FontAwesomeIcon icon="comment" className={styles.icon} />
            {formatNumber(commentCount)}
          </span>
        </div>
      </div>
      <div className={styles.channelOwner}>
        <FontAwesomeIcon className={styles.icon} icon="user-circle" size="2x" />
        {channelTitle}
      </div>
    </div>
  );
};

VideoInfo.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  dislikeCount: PropTypes.string.isRequired,
  commentCount: PropTypes.string.isRequired,
  className: PropTypes.string,
};

VideoInfo.defaultProps = {
  className: '',
};

export default VideoInfo;
