const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchForVideosEndpoint = (keyword, maxResults = 20) => {
  const url = `${BASE_URL}/search?part=snippet&videoEmbeddable=true&maxResults=${maxResults}&q=${keyword}&type=video&key=${API_KEY}`;
  return url;
};

export const relatedVideosEndpoint = (videoId, maxResults = 20) => {
  const url = `${BASE_URL}/search?part=snippet&videoEmbeddable=true&maxResults=${maxResults}&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`;
  return url;
};

export const videoInfoEndpoint = (videoId) => {
  const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  return url;
};

export const popularVideosEndpoint = (videoCategoryId = 10, maxResults = 20) => {
  const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${videoCategoryId}&maxResults=${maxResults}&key=${API_KEY}`;
  return url;
};
