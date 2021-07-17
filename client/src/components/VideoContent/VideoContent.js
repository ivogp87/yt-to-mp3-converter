import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoContent.module.scss';
import VideoPlayer from '../VideoPlayer';
import VideoInfo from '../VideoInfo';
import VideoDescription from '../VideoDescription';
import VideoList from '../VideoList';
import Button from '../Button';

const VideoContent = ({
  videoId,
  autoPlay,
  videoTitle,
  channelTitle,
  publishedAt,
  viewCount,
  likeCount,
  dislikeCount,
  commentCount,
  description,
  relatedVideos,
  onDownload,
  isDownloadDisabled,
}) => {
  return (
    <section className={styles.videoContent}>
      <main className={styles.mainContent}>
        <VideoPlayer
          videoId={videoId}
          videoTitle={videoTitle}
          autoPlay={autoPlay}
          className={styles.marginBottom}
        />
        <Button
          type="button"
          onClick={onDownload}
          icon="download"
          color={isDownloadDisabled ? 'secondary' : 'primary'}
          disabled={isDownloadDisabled}
          className={styles.marginBottom}
        >
          Download Mp3
        </Button>
        <VideoInfo
          videoTitle={videoTitle}
          channelTitle={channelTitle}
          publishedAt={publishedAt}
          viewCount={viewCount}
          likeCount={likeCount}
          dislikeCount={dislikeCount}
          commentCount={commentCount}
          className={description ? styles.marginBottom : ''}
        />
        {description && (
          <VideoDescription description={description} className={styles.marginBottom} />
        )}
      </main>
      <aside className={styles.relatedVideos}>
        {relatedVideos && relatedVideos.length && (
          <VideoList
            videos={relatedVideos}
            title="Related Videos"
            showDescription={false}
            showViews={false}
          />
        )}
      </aside>
    </section>
  );
};

VideoContent.propTypes = {
  videoId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  videoTitle: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  dislikeCount: PropTypes.string.isRequired,
  commentCount: PropTypes.string.isRequired,
  description: PropTypes.string,
  relatedVideos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      channelTitle: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      views: PropTypes.string,
    })
  ),
  onDownload: PropTypes.func.isRequired,
  isDownloadDisabled: PropTypes.bool.isRequired,
};

VideoContent.defaultProps = {
  autoPlay: false,
  description: null,
  relatedVideos: null,
};

export default VideoContent;
