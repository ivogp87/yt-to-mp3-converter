import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ icon, children, type, variant, color, size, extraClass, onClick }) => {
  // Pass at least one of the two props!
  if (children === '' && !icon) {
    // eslint-disable-next-line no-console
    console.warn('Pass string as children, icon as a prop or both to the button!');
    return null;
  }

  // textPrimary, containedPrimary  // variant="text" color="primary"

  const className = `${styles.btn} ${styles[`${variant}-${color}`]} ${styles[size]} ${extraClass}`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className={className} type={type}>
      {icon.iconName !== '' && <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" />}
      {children !== '' && <span>{children}</span>}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  type: 'button',
  icon: { iconName: '', prefix: '' },
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  extraClass: '',
  onClick: () => null,
};

Button.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
  }),
  children: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['text', 'contained']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
