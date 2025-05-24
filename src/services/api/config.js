// src/services/api/config.js
const config = {
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:8088',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

export default config;