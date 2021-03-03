import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoGrid.module.scss';
import VideoPreview from '../VideoPreview';

const VideoGrid = ({ videos, title, showViews, showDescription }) => (
  <>
    {title && <h2 className={styles.title}>{title}</h2>}
    <section className={styles.videoGrid}>
      {videos.map(
        ({
          id,
          title: videoTitle,
          thumbnail,
          channelTitle,
          publishedAt,
          viewCount,
          description,
        }) => {
          return (
            <VideoPreview
              direction="column"
              className={styles.videoGridItem}
              key={id}
              id={id}
              title={videoTitle}
              thumbnail={thumbnail}
              channelTitle={channelTitle}
              publishedAt={publishedAt}
              views={showViews ? viewCount : null}
              description={showDescription ? description : null}
            />
          );
        }
      )}
    </section>
  </>
);

VideoGrid.propTypes = {
  title: PropTypes.string,
  showViews: PropTypes.bool.isRequired,
  showDescription: PropTypes.bool.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      channelTitle: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      views: PropTypes.string,
    })
  ).isRequired,
};

VideoGrid.defaultProps = {
  title: '',
};

export default VideoGrid;
