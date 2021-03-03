import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoList.module.scss';
import VideoPreview from '../VideoPreview';

const VideoList = ({ videos, title, showViews, showDescription }) => (
  <>
    {title && <h2 className={styles.title}>{title}</h2>}

    <section>
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
              direction="row"
              className={styles.videoListItem}
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

VideoList.propTypes = {
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

VideoList.defaultProps = {
  title: '',
};

export default VideoList;
