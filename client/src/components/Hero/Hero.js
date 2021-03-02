import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';
import Container from '../Container';
import SearchBar from '../SearchBar';

const Hero = ({ searchTerm, onSubmit, onChange }) => (
  <section className={styles.hero}>
    <Container>
      <div className={styles.heroContent}>
        <h1>YouTube To MP3 Converter</h1>
        <p>Find, watch and download YouTube videos</p>
        <SearchBar
          className={styles.heroSearchBar}
          searchTerm={searchTerm}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Hero;
