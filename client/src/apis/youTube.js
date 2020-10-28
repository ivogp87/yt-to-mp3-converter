const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Fetch videos by keyword
export const searchByKeyword = async (keyword, maxResults = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=${maxResults}&q=${keyword}&type=video&key=${API_KEY}`
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    throw new Error('Request failed!');
  } catch (error) {
    return error;
  }
};

// Fetch YouTube video details by Id
export const getVideoById = async (videoId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );

    if (response.ok) {
      const jsonResponse = await response.json();

      // Throw error if the items array is empty (YouTube sends empty array when the videoId is invalid)
      if (!jsonResponse.items.length) throw new Error('Invalid YouTube video id');
      return jsonResponse;
    }

    throw new Error('Request failed!');
  } catch (error) {
    return error;
  }
};
