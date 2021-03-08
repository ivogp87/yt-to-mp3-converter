import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import classNames from 'classnames';
import styles from './VideoDescription.module.scss';
import Button from '../Button';

const VideoDescription = ({ description, className }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (typeof description !== 'string' || description.length === 0) return null;

  const descriptionItems = description.split('\n');
  const descriptionToShow = showFullDescription ? descriptionItems : descriptionItems.slice(0, 3);

  const handleToggleDescription = () => {
    setShowFullDescription((currentDescriptionToShow) => !currentDescriptionToShow);
  };

  const linkDecorator = (href, anchorText, key) => {
    return (
      <a key={key} href={href} target="_blank" rel="nofollow noopener noreferrer">
        {anchorText}
      </a>
    );
  };

  return (
    <div className={classNames(styles.videoDescription, className)}>
      {descriptionToShow.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <p key={item + index}>
            <Linkify componentDecorator={linkDecorator}>{item}</Linkify>
          </p>
        );
      })}
      {descriptionItems.length > 3 && (
        <Button
          type="button"
          onClick={handleToggleDescription}
          className={styles.showMoreButton}
          icon={showFullDescription ? 'chevron-up' : 'chevron-down'}
          color="secondary"
        >
          {showFullDescription ? 'Show less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

VideoDescription.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

VideoDescription.defaultProps = {
  className: null,
};

export default VideoDescription;
