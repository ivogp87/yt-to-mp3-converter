import React from 'react';
import { faYoutube, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';
import Container from '../Container';
import SocialMediaProfile from '../SocialMediaProfile';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.socialMediaProfiles}>
          <SocialMediaProfile icon={faYoutube} link="https://youtube.com" color="secondary" />
          <SocialMediaProfile icon={faTwitter} link="https://twitter.com" color="secondary" />
          <SocialMediaProfile icon={faFacebookF} link="https://facebook.com" color="secondary" />
          <SocialMediaProfile icon={faInstagram} link="https://instagram.com" color="secondary" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
