import { useState, useEffect } from 'react';

const useYouTubeData = (getYouTubeData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [youTubeData, setYouTubeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getYouTubeData();

      // Error or empty data
      if (data instanceof Error || !data.items.length) {
        setError(true);
        setIsLoading(false);
      } else {
        // Everything's OK
        setYouTubeData(data.items);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getYouTubeData]);

  return [isLoading, error, youTubeData];
};

export default useYouTubeData;
