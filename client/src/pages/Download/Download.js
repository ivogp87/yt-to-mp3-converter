import React from 'react';
import PropTypes from 'prop-types';
import './Download.css';
import VideoPlayer from '../../components/VideoPlayer';
import DownloadMp3 from '../../components/DownloadMp3';

const Download = ({
  match: {
    params: { videoId },
  },
}) => {
  return (
    <main className="download">
      <div className="container padding-2">
        <div className="row">
          <div className="video-container">
            <VideoPlayer videoId={videoId} autoPlay />
          </div>
          <div className="download-container">
            <DownloadMp3 videoId={videoId} />
          </div>
        </div>
      </div>
    </main>
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
