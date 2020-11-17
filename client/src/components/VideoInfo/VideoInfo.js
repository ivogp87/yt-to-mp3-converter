import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faUser,
  faComment,
  faEye,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import styles from './VideoInfo.module.scss';
import youTube from '../../apis/youTube';
import useYouTubeData from '../../hooks/useYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoStatistic from './VideoStatistic';
import VideoDescription from './VideoDescription';

const VideoInfo = ({ videoId }) => {
  const getVideoInfo = useCallback(() => youTube.getVideoInfo(videoId), [videoId]);

  const [isLoading, error, youTubeData] = useYouTubeData(getVideoInfo);
  const videoInfo = youTubeData[0];

  // Loading
  if (isLoading) {
    return <ComponentStatus status="loading" message="Loading..." />;
  }

  // Error
  if (error) {
    return (
      <ComponentStatus
        status="error"
        message="We can't display information about this video right now..."
      />
    );
  }

  // Render the video tags/keywords
  const renderVideoTags = () => {
    // Return null if there are no tags
    if (!videoInfo.snippet.tags) return null;

    // Render only the first three tags
    return videoInfo.snippet.tags.slice(0, 3).map((tag) => {
      const urlEncodedTag = encodeURIComponent(tag).replace(/%20/gi, '+');
      return (
        <Link className={styles.tag} key={tag} to={`/search?term=%23${urlEncodedTag}`}>
          {tag}
        </Link>
      );
    });
  };

  return (
    <>
      <div className={styles.tags}>{renderVideoTags()}</div>
      <h2 className={styles.title}>{videoInfo.snippet.title}</h2>
      {/* Video stats - views, likes, etc */}
      <div className={styles.videoStats}>
        <div className={styles.videoStatsPrimary}>
          <VideoStatistic icon={faEye} count={videoInfo.statistics.viewCount} text="views" />
          <VideoStatistic icon={faCalendarWeek} count={videoInfo.snippet.publishedAt} type="date" />
        </div>
        <div className={styles.videoStatsSecondary}>
          <VideoStatistic icon={faThumbsUp} count={videoInfo.statistics.likeCount} />
          <VideoStatistic icon={faThumbsDown} count={videoInfo.statistics.dislikeCount} />
          <VideoStatistic icon={faComment} count={videoInfo.statistics.commentCount} />
        </div>
      </div>
      <a
        className={styles.channelTitle}
        title={`Visit ${videoInfo.snippet.channelTitle}'s YouTube Channel`}
        href={`https://www.youtube.com/channel/${videoInfo.snippet.channelId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        {videoInfo.snippet.channelTitle}
      </a>
      {videoInfo.snippet.description && (
        <VideoDescription description={videoInfo.snippet.description} />
      )}
    </>
  );
};

VideoInfo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoInfo;
