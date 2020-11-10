const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youTube = {
  async getData(url) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }

      throw new Error('Request failed!');
    } catch (error) {
      return error;
    }
  },

  async searchByKeyword(keyword, maxResults = 20) {
    const url = `${BASE_URL}/search?part=snippet&videoEmbeddable=true&maxResults=${maxResults}&q=${keyword}&type=video&key=${API_KEY}`;
    return this.getData(url);
  },

  async getVideoInfo(videoId) {
    const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    return this.getData(url);
  },

  async getPopularVideos(videoCategoryId = 10, maxResults = 20) {
    const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${videoCategoryId}&maxResults=${maxResults}&key=${API_KEY}`;
    return this.getData(url);
  },

  async getRelatedVideos(videoId, maxResults = 20) {
    const url = `${BASE_URL}/search?part=snippet&videoEmbeddable=true&maxResults=${maxResults}&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`;
    return this.getData(url);
  },
};

export default youTube;
