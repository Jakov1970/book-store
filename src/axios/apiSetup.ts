import axios from 'axios';

const URL_ROOT = 'http://book-store.mvsoft.co.rs/'

export const axiosInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});