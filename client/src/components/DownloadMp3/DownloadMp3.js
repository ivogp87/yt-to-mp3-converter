import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DownloadMp3.module.scss';
import Button from '../Button';
import IconButton from '../IconButton';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const DownloadMp3 = ({ onDownload, isDownloadDisabled, downloadStatus, className }) => {
  const [showDownloadStatus, setShowDownloadStatus] = useState(true);

  const handleHideStatus = () => {
    setShowDownloadStatus(false);
  };

  useEffect(() => {
    setShowDownloadStatus(true);
  }, [downloadStatus]);

  return (
    <div className={className}>
      <Button
        type="button"
        onClick={onDownload}
        icon="download"
        color="primary"
        disabled={isDownloadDisabled}
      >
        Download Mp3
      </Button>
      {showDownloadStatus && downloadStatus !== 'idle' && (
        <div className={styles.downloadStatus}>
          {downloadStatus === 'downloading' && (
            <>
              <Loader />
              <span className={styles.message}>&nbsp; Downloading...</span>
            </>
          )}
          {downloadStatus === 'error' && (
            <span className={styles.message}>
              <ErrorMessage>Download failed</ErrorMessage>
            </span>
          )}
          <IconButton
            type="button"
            title="hide message"
            onClick={handleHideStatus}
            icon="times"
            color="secondary"
          />
        </div>
      )}
    </div>
  );
};

DownloadMp3.propTypes = {
  onDownload: PropTypes.func.isRequired,
  isDownloadDisabled: PropTypes.bool.isRequired,
  downloadStatus: PropTypes.oneOf(['idle', 'downloading', 'error']).isRequired,
  className: PropTypes.string,
};

DownloadMp3.defaultProps = {
  className: '',
};

export default DownloadMp3;
