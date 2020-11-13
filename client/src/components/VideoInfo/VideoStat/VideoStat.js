import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumber, formatDate } from '../../../helpers/index';
import styles from './VideoStat.module.scss';

const VideoStat = ({ icon, videoStat, text, type }) => {
  return (
    <p className={styles.videoStat}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {`${
        type === 'number' ? formatNumber(Number(videoStat)) : formatDate(new Date(videoStat))
      } ${text}`}
    </p>
  );
};

VideoStat.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  videoStat: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(['number', 'date']),
};

VideoStat.defaultProps = {
  text: '',
  type: 'number',
};

export default VideoStat;
