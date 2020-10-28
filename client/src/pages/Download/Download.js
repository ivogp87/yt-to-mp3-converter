import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/VideoPlayer';

const Download = ({
  match: {
    params: { videoId },
  },
}) => {
  return (
    <main className="download">
      <div className="container padding-2">
        <VideoPlayer videoId={videoId} autoPlay />
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
