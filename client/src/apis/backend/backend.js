import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL;

const downloadMp3 = (videoId) =>
  axios.get(`${BASE_API_URL}/download/${videoId}`, {
    responseType: 'blob',
    timeout: 120000,
  });

export default downloadMp3;
