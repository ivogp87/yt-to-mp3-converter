import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './DownloadMp3.module.scss';
import Button from '../Button';

const DownloadMp3 = ({ videoId }) => {
  const [downloadStatus, setDownloadStatus] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleDownload = async () => {
    const BASE_API_URL = process.env.REACT_APP_API_URL;

    setIsDownloading(true);
    setDownloadStatus('Starting download');

    try {
      const response = await fetch(`${BASE_API_URL}/download/${videoId}`);

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const filename = response.headers
        .get('content-disposition')
        .split('=')[1]
        .replace(/"/gi, '')
        .trim();

      if (isMounted.current) setDownloadStatus(`Downloading ${filename}`);

      const file = await response.blob();
      saveAs(file, filename);

      if (isMounted.current) {
        setIsDownloading(false);
        setDownloadStatus(`Download complete. Filename: ${filename}`);
      }
    } catch (error) {
      if (isMounted.current) {
        setIsDownloading(false);
        setDownloadStatus('Download failed');
      }
    }
  };

  // Close the download status message
  const handleClose = () => {
    setDownloadStatus('');
  };

  return (
    <>
      <Button onClick={handleDownload} icon={faFileDownload}>
        Download Mp3
      </Button>
      {downloadStatus && (
        <div className={styles.downloadStatus}>
          {isDownloading && (
            <FontAwesomeIcon className={styles.loadingIcon} icon={faSpinner} size="lg" spin />
          )}
          <p>{downloadStatus}</p>
          <Button onClick={handleClose} icon={faTimes} variant="text" size="small" />
        </div>
      )}
    </>
  );
};

DownloadMp3.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default DownloadMp3;
