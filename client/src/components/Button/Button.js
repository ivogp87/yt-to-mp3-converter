import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ onClick, type, icon, children, color, title, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, styles[`button-${color}`], className)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      title={title}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
  icon: null,
  title: null,
  disabled: false,
  className: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
