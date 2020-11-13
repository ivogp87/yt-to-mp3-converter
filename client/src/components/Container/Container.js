import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
