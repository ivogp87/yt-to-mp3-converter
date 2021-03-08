import React from 'react';
import styles from './Footer.module.scss';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>{new Date().getFullYear()}</div>
      </Container>
    </footer>
  );
};

export default Footer;
