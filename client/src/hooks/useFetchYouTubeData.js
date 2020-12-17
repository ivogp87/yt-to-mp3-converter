import { useState, useEffect } from 'react';
import formatYouTubeApiResponse from '../helpers/formatYouTubeApiResponse';

const useFetchYouTubeData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [youTubeData, setYouTubeData] = useState([]);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const videoData = jsonResponse.items;

        if (response.ok && videoData.length) {
          const formattedVideoData = formatYouTubeApiResponse(videoData);

          setYouTubeData(formattedVideoData);
          setError('');
        } else {
          throw new Error('Something went wrong');
        }
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    };

    fetchYouTubeData();
  }, [url]);

  return [isLoading, error, youTubeData];
};

export default useFetchYouTubeData;
