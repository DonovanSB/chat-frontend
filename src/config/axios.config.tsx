import axios from 'axios';
import { base_url } from './globals';

const axiosApi = axios.create({
  baseURL: base_url,
});

export default axiosApi;
