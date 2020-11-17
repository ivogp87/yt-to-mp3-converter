import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formatStrAsNumber from '../../../helpers/formatStrAsNumber';
import formatStrAsDate from '../../../helpers/formatStrAsDate';
import styles from './VideoStatistic.module.scss';

const VideoStatistic = ({ icon, count, text, type }) => {
  return (
    <p className={styles.VideoStatistic}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {`${type === 'number' ? formatStrAsNumber(count) : formatStrAsDate(count)} ${text}`}
    </p>
  );
};

VideoStatistic.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  count: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(['number', 'date']),
};

VideoStatistic.defaultProps = {
  text: '',
  type: 'number',
};

export default VideoStatistic;
