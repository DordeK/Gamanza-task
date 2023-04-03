import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://universities.hipolabs.com/',
  timeout: 5000,
});

export default instance;