// src/services/apiService.js
import axios from 'axios';
import apiConfig from './api/config';
import { setupInterceptors } from './api/interceptors';

// Create axios instance with config
const apiClient = setupInterceptors(axios.create(apiConfig));

// Error handler helper
const handleApiError = (error) => {
  console.error('API Error:', error);
  let errorMessage = 'An error occurred. Please try again.';

  if (error.response) {
    // Server responded with error
    const { status, data } = error.response;

    if (status === 400 && data.message) {
      errorMessage = data.message;
    } else if (status === 401) {
      errorMessage = 'Authentication failed. Please login again.';
    } else if (status === 403) {
      errorMessage = 'You do not have permission to access this resource.';
    } else if (status === 404) {
      errorMessage = 'Resource not found.';
    } else if (status === 500) {
      errorMessage = 'Server error. Please try again later.';
    }
  } else if (error.request) {
    // Request made but no response received
    errorMessage = 'No response from server. Please check your connection.';
  }

  return Promise.reject({ error, message: errorMessage });
};

// Auth services
const authService = {
  login(email, password) {
    return apiClient.post('/api/auth/login', { email, password })
      .catch(handleApiError);
  },

  logout() {
    return apiClient.post('/api/auth/logout')
      .catch(handleApiError);
  },

  register(userData) {
    return apiClient.post('/api/auth/register', userData)
      .catch(handleApiError);
  },

  refreshToken() {
    return apiClient.post('/api/auth/refresh')
      .catch(handleApiError);
  }
};

// Employee services
const employeeService = {
  getEmployees(page = 0, size = 20) {
    return apiClient.get(`/employees`, { params: { page, size } })
      .catch(handleApiError);
  },

  getEmployeeById(id) {
    return apiClient.get(`/api/employees/${id}`)
      .catch(handleApiError);
  },

  createEmployee(employeeData) {
    return apiClient.post('/employees', employeeData)
      .catch(handleApiError);
  },

  updateEmployee(id, employeeData) {
    return apiClient.put(`/api/employees/${id}`, employeeData)
      .catch(handleApiError);
  },

  deleteEmployee(id) {
    return apiClient.delete(`/employees/${id}`)
      .catch(handleApiError);
  },

  markEmployeeAttendance(attendanceData) {
     return apiClient.post('/employee-attendance', attendanceData)
       .catch(handleApiError);
  },

  getTodayAttendance() {
      return apiClient.get('/employee-attendance/today')
        .catch(handleApiError);
  },
};

// Export all services
export default {
  ...authService,
  ...employeeService
};