import React from 'react';
import styles from './Error404.module.scss';
import Container from '../../components/Container';
import ComponentStatus from '../../components/ComponentStatus';

const NotFound = () => {
  return (
    <Container>
      <div className={styles.error}>
        <ComponentStatus status="error" message="Error 404. Page not found" />
      </div>
    </Container>
  );
};

export default NotFound;
