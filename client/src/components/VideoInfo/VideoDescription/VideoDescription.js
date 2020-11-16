import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Linkify from 'react-linkify';
import styles from './VideoDescription.module.scss';
import Button from '../../Button';

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
    const buttonText = showFullDescription ? 'Show less' : 'Show More';
    const buttonIcon = showFullDescription ? faChevronUp : faChevronDown;

    const handleShowMoreClick = () => setShowFullDescription(!showFullDescription);

    return (
      <Button
        onClick={handleShowMoreClick}
        extraClass={styles.showMoreBtn}
        icon={buttonIcon}
        variant="text"
        size="small"
      >
        {buttonText}
      </Button>
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
