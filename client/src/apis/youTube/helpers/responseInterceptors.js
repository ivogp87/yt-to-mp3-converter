import filterYouTubeVideoResponse from './filterYouTubeVideoResponse';
import formatYouTubeVideoResponse from './formatYouTubeVideoResponse';

const videoResponseKinds = ['youtube#searchListResponse', 'youtube#videoListResponse'];

export const onResponseSuccess = (response) => {
  if (videoResponseKinds.includes(response.data.kind)) {
    const videoResults = filterYouTubeVideoResponse(response.data.items);
    const formattedVideos = formatYouTubeVideoResponse(videoResults);
    return { ...response.data, items: formattedVideos };
  }

  return response.data;
};

export const onResponseError = (error) => {
  const errorMessage =
    error.response && error.response.data.error.message
      ? error.response.data.error.message
      : error.message;

  return Promise.reject(new Error(errorMessage));
};
