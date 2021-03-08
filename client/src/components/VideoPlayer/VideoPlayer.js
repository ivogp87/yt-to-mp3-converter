import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ videoId, videoTitle, autoPlay, className }) => {
  return (
    <div className={classNames(styles.videoPlayer, className)}>
      <iframe
        className={styles.responsiveIframe}
        title={videoTitle || 'YouTube video'}
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
  videoTitle: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
};

VideoPlayer.defaultProps = {
  autoPlay: false,
  videoTitle: null,
  className: null,
};

export default VideoPlayer;
