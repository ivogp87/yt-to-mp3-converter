import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './IconButton.module.scss';

const IconButton = ({ onClick, type, icon, color, title, disabled, className }) => (
  <button
    className={classNames(styles.iconButton, styles[`iconButton-${color}`], className)}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    title={title}
    disabled={disabled}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </button>
);

IconButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: () => {},
  title: '',
  disabled: false,
  className: '',
};

export default IconButton;
