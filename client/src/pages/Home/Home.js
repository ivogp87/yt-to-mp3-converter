import React from 'react';
import usePromise from 'react-fetch-hook/usePromise';
import { getPopularVideos } from '../../apis/youTube/youTube';
import VideoGrid from '../../components/VideoGrid';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
  const { isLoading, data = { items: null }, error = {} } = usePromise(() => getPopularVideos(10), [
    10,
  ]);

  if (error.message || (data.items && data.items.length === 0)) {
    const message =
      error.message === 'Network Error'
        ? 'Network Error. Please refresh the page and try again'
        : 'No popular videos found.';
    return (
      <ErrorMessage position="center">
        <p>{message}</p>
      </ErrorMessage>
    );
  }

  if (isLoading) return <Loader position="center" />;

  return (
    <main>
      <VideoGrid
        title="Popular Music Videos"
        videos={data.items}
        showViews
        showDescription={false}
      />
    </main>
  );
};

export default Home;
