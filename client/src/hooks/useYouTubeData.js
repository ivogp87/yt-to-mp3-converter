import { useState, useEffect } from 'react';

const useYouTubeData = (getYouTubeData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [youTubeData, setYouTubeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getYouTubeData();

      // Error or no data (sometimes YouTube's API return empty array)
      if (data instanceof Error || !data.items.length) {
        setError(true);
      } else {
        // Everything's OK
        // Filter out live videos
        const videos = data.items.filter((video) => video.snippet.liveBroadcastContent === 'none');

        setYouTubeData(videos);
        setError(false);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [getYouTubeData]);

  return [isLoading, error, youTubeData];
};

export default useYouTubeData;
