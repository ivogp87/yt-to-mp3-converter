import React from 'react';
import PropTypes from 'prop-types';
import styles from './Download.module.scss';
import Container from '../../components/Container';
import VideoPlayer from '../../components/VideoPlayer';
import VideoInfo from '../../components/VideoInfo';
import RelatedVideos from '../../components/RelatedVideos';
import DownloadMp3 from '../../components/DownloadMp3';

const Download = ({
  match: {
    params: { videoId },
  },
}) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <main className={styles.mainContent}>
          <div className={styles.player}>
            <VideoPlayer videoId={videoId} autoPlay />
          </div>
          <div className={styles.download}>
            <DownloadMp3 videoId={videoId} />
          </div>
          <div className={styles.videoInfo}>
            <VideoInfo videoId={videoId} />
          </div>
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
