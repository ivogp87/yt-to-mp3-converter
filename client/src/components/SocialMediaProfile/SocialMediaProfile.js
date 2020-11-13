import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialMediaProfile.module.scss';

const SocialMediaProfile = ({ icon, link, color }) => {
  return (
    <a className={styles[color]} href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
};

SocialMediaProfile.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']).isRequired,
};

export default SocialMediaProfile;
