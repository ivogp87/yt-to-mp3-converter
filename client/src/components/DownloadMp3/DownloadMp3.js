import React from 'react';
import PropTypes from 'prop-types';
import './DownloadMp3.css';

const DownloadMp3 = ({ videoId }) => {
  return (
    <button className="btn download-btn bg-light text-primary" type="button">
      Download MP3
    </button>
  );
};

DownloadMp3.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default DownloadMp3;
