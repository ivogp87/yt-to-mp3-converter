import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import styles from './VideoDescription.module.scss';

const VideoDescription = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Split the description on new line
  const descriptionItems = description.split('\n');

  // Show only 3 items/lines from the description by default
  const itemsToShow = showFullDescription ? descriptionItems : descriptionItems.slice(0, 3);

  // Render show more/less button
  const renderShowMoreBtn = () => {
    // Don't render the button if there are 3 or less items
    if (descriptionItems.length <= 3) return null;

    // render the button
    const buttonText = showFullDescription ? 'Show Less' : 'Show More';

    return (
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          setShowFullDescription(!showFullDescription);
        }}
        className={styles.showMoreBtn}
        type="button"
      >
        {buttonText}
      </button>
    );
  };

  // Linkify component decorator
  const componentDecorator = (href, text, key) => {
    return (
      <a
        className={styles.descriptionLink}
        key={key}
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {text}
      </a>
    );
  };

  return (
    <>
      <div className={styles.videoDescription}>
        {itemsToShow.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index} className={styles.descriptionText}>
              <Linkify componentDecorator={componentDecorator}>{item}</Linkify>
            </p>
          );
        })}
      </div>
      {renderShowMoreBtn()}
    </>
  );
};

VideoDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default VideoDescription;
