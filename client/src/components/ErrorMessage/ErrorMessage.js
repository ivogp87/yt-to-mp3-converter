import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ children, position, className }) => (
  <div className={classNames(styles[position], className)}>{children}</div>
);

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['default', 'center']),
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  position: 'default',
  className: null,
};

export default ErrorMessage;
