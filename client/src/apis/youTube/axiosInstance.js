import axios from 'axios';
import { onResponseSuccess, onResponseError } from './helpers/responseInterceptors';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    key: API_KEY,
  },
});

axiosInstance.interceptors.response.use((response) => onResponseSuccess(response), onResponseError);

export default axiosInstance;
