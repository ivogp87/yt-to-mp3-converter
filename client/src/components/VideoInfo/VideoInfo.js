import React from 'react';
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
import { videoInfoEndpoint } from '../../apis/youTube';
import useFetchYouTubeData from '../../hooks/useFetchYouTubeData';
import ComponentStatus from '../ComponentStatus';
import VideoStatistic from './VideoStatistic';
import VideoDescription from './VideoDescription';

const VideoInfo = ({ videoId }) => {
  const apiUrl = videoInfoEndpoint(videoId);
  const [isLoading, error, youTubeData] = useFetchYouTubeData(apiUrl);

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

  const {
    title,
    description,
    channelTitle,
    channelId,
    publishedAt,
    tags,
    viewCount,
    likeCount,
    dislikeCount,
    commentCount,
  } = youTubeData[0];

  // Render the video tags/keywords
  const renderVideoTags = () => {
    // Render only the first three tags
    return tags.slice(0, 3).map((tag) => {
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
      <h2 className={styles.title}>{title}</h2>
      {/* Video stats - views, likes, etc */}
      <div className={styles.videoStats}>
        <div className={styles.videoStatsPrimary}>
          <VideoStatistic icon={faEye} count={viewCount} text="views" />
          <VideoStatistic icon={faCalendarWeek} count={publishedAt} type="date" />
        </div>
        <div className={styles.videoStatsSecondary}>
          <VideoStatistic icon={faThumbsUp} count={likeCount} />
          <VideoStatistic icon={faThumbsDown} count={dislikeCount} />
          <VideoStatistic icon={faComment} count={commentCount} />
        </div>
      </div>
      <a
        className={styles.channelTitle}
        title={`Visit ${channelTitle}'s YouTube Channel`}
        href={`https://www.youtube.com/channel/${channelId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        {channelTitle}
      </a>
      {description && <VideoDescription description={description} />}
    </>
  );
};

VideoInfo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoInfo;
