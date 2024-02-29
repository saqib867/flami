import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers)
    // config.headers['Authorization'] = 'Bearer your_access_token';
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);