import React from 'react';
import styles from './Home.module.scss';
import Container from '../../components/Container';
import SearchBar from '../../components/SearchBar';
import PopularVideos from '../../components/PopularVideos';

const Home = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <Container>
          <div className={styles.headerInner}>
            <h1 className={styles.title}>YouTube To MP3 Converter</h1>
            <p className={styles.text}>Start by searching for videos.</p>
            <div className={styles.searchContainer}>
              <SearchBar />
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <div className={styles.popularVideosContainer}>
            <h2>Popular Music Videos</h2>
            <PopularVideos />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
