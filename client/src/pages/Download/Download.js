import React from 'react';
import PropTypes from 'prop-types';
import styles from './Download.module.scss';
import Container from '../../components/Container';
import VideoPlayer from '../../components/VideoPlayer';
import VideoInfo from '../../components/VideoInfo';
import RelatedVideos from '../../components/RelatedVideos';

const Download = ({
  match: {
    params: { videoId },
  },
}) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <main className={styles.mainContent}>
          <VideoPlayer videoId={videoId} autoPlay />
          <VideoInfo videoId={videoId} />
        </main>
        <aside className={styles.sidebar}>
          <h3 className={styles.title}>Related Videos</h3>
          <RelatedVideos videoId={videoId} />
        </aside>
      </div>
    </Container>
  );
};

Download.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Download;
