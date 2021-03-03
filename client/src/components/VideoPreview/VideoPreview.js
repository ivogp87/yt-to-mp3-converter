import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import formatNumber from '../../helpers/formatNumber';
import formatDate from '../../helpers/formatDate';
import decodeHtmlEntities from '../../helpers/decodeHtmlEntities';
import styles from './VideoPreview.module.scss';

const VideoPreview = ({
  direction,
  className,
  id,
  title,
  thumbnail,
  description,
  channelTitle,
  publishedAt,
  views,
}) => {
  const mainClassNames = direction === 'row' ? styles.videoPreviewRow : styles.videoPreviewColumn;

  return (
    <Link className={classNames(mainClassNames, className)} to={`/download/${id}`} title={title}>
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
              {formatNumber(views)}
              &nbsp; views
            </p>
          )}
          <p className={styles.text}>{formatDate(publishedAt)}</p>
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
  className: null,
};

VideoPreview.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  views: PropTypes.string,
};

export default VideoPreview;
