import axios from 'axios';

const URL_ROOT = 'http://book-store.mvsoft.co.rs/'

export const axiosInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {
    "Content-type": "application/json"
  }
});