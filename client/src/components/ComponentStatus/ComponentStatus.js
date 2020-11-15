import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './ComponentStatus.module.scss';

const ComponentStatus = ({ status, message }) => {
  return (
    <div className={styles.ComponentStatus}>
      {status === 'loading' ? (
        <FontAwesomeIcon className={styles.icon} icon={faSpinner} spin size="2x" />
      ) : null}
      <p className={styles.message}>{message}</p>
    </div>
  );
};

ComponentStatus.propTypes = {
  status: PropTypes.oneOf(['loading', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default ComponentStatus;
