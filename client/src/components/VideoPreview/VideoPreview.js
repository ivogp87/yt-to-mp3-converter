import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatNumber, formatDate, decodeHtmlEntities } from '../../helpers';
import styles from './VideoPreview.module.scss';

const VideoPreview = ({
  direction,
  id,
  title,
  thumbnail,
  description,
  channelTitle,
  publishTime,
  views,
}) => {
  // Display as a row or column
  const className = direction === 'row' ? styles.videoPreviewRow : styles.videoPreviewColumn;

  return (
    <Link className={className} to={`/download/${id}`} title={title}>
      <div className={styles.thumbnail}>
        <img className={styles.img} src={thumbnail} alt={`${title} video thumbnail`} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{decodeHtmlEntities(title)}</h2>
        <div className={styles.meta}>
          <p className={styles.text}>
            <strong>{channelTitle}</strong>
          </p>
          {views && (
            <p className={styles.text}>
              {formatNumber(Number(views))}
              &nbsp; views
            </p>
          )}
          <p className={styles.text}>{formatDate(new Date(publishTime))}</p>
        </div>
        {description && (
          <div className={styles.description}>
            <p className={styles.text}>{description}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

VideoPreview.defaultProps = {
  description: null,
  views: null,
};

VideoPreview.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string,
  channelTitle: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  views: PropTypes.string,
};

export default VideoPreview;
