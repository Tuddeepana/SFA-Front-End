// src/services/api/interceptors.js
import store from '@/store';

export const setupInterceptors = (axios) => {
  // Request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      
      if (response && response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        // Optional: Redirect to login
        // window.location.href = '/auth/login';
      }
      
      return Promise.reject(error);
    }
  );

  return axios;
};