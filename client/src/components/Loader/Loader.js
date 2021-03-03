import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loader.module.scss';

const Loader = ({ position, size }) => (
  <span className={styles[position]}>
    <FontAwesomeIcon icon="spinner" size={size === 'small' ? 'lg' : '2x'} spin />
  </span>
);

Loader.propTypes = {
  position: PropTypes.oneOf(['default', 'center']),
  size: PropTypes.oneOf(['small', 'medium']),
};

Loader.defaultProps = {
  position: 'default',
  size: 'medium',
};

export default Loader;
