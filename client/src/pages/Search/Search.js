import React from 'react';
import { useLocation } from 'react-router-dom';
import qS from 'query-string';
import usePromise from 'react-fetch-hook/usePromise';
import { getVideos } from '../../apis/youTube/youTube';
import VideoList from '../../components/VideoList';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

const Search = () => {
  const location = useLocation();
  const queryString = qS.parse(location.search);
  const searchTerm = queryString.term;
  const { isLoading, data = { items: null }, error = {} } = usePromise(
    () => getVideos(searchTerm),
    [searchTerm]
  );

  if (!searchTerm) {
    return (
      <ErrorMessage position="center">
        <p>Please use the search form to search for videos.</p>
      </ErrorMessage>
    );
  }

  if (error.message) {
    const message =
      error.message === 'Network Error'
        ? 'Network Error. Please refresh the page and try again.'
        : 'Something went wrong. Please try again.';
    return (
      <ErrorMessage position="center">
        <p>{message}</p>
      </ErrorMessage>
    );
  }

  if (data.items && data.items.length === 0 && !isLoading) {
    return (
      <ErrorMessage position="center">
        <p>No results found. Try with different keyword.</p>
      </ErrorMessage>
    );
  }

  if (isLoading && (!data.items || (data.items && data.items.length === 0))) {
    return <Loader position="center" />;
  }

  return (
    <main>
      <VideoList videos={data.items} showDescription showViews={false} />
    </main>
  );
};

export default Search;
