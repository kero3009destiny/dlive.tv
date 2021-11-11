import axios from 'axios';

const service = axios.create({
  timeout: 600000
});

// request interceptor
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default service;
