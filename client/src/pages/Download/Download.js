import React from 'react';
import PropTypes from 'prop-types';
import './Download.css';
import VideoPlayer from '../../components/VideoPlayer';
import VideoInfo from '../../components/VideoInfo';
import DownloadMp3 from '../../components/DownloadMp3';
import RelatedVideos from '../../components/RelatedVideos';

const Download = ({
  match: {
    params: { videoId },
  },
}) => {
  return (
    <div className="container padding-2 download">
      <main className="margin-y-1 content">
        <VideoPlayer videoId={videoId} autoPlay />
        <DownloadMp3 videoId={videoId} />
        <VideoInfo videoId={videoId} />
      </main>
      <aside className="margin-y-1 sidebar">
        <h3 className="related-videos">Related Videos</h3>
        <RelatedVideos videoId={videoId} />
      </aside>
    </div>
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
