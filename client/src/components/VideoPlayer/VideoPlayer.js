import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ videoId, autoPlay }) => {
  return (
    <div className={styles.videoPlayer}>
      <iframe
        className={styles.responsiveIframe}
        title="YouTube video"
        width="100%"
        height="auto"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoPlay}`}
        frameBorder="0"
        autoPlay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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
