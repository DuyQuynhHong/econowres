import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
};

// User API
export const userAPI = {
  getProfile: async (userId) => {
    const response = await api.get(`/users/profile/${userId}`);
    return response.data;
  },
  
  updateProfile: async (userId, userData) => {
    const response = await api.put(`/users/profile/${userId}`, userData);
    return response.data;
  },
};

// File API
export const fileAPI = {
  uploadAvatar: async (file, userId) => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('userId', userId);
    
    const response = await api.post('/files/upload/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export default api;

