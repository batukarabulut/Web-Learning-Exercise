// src/services/api.js
import axios from 'axios';

// Base API URL - replace with your actual backend URL when deployed
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API errors
const handleApiError = (error) => { 
  console.error('API Error:', error);
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
    throw new Error(error.response.data.message || 'Server error');
  } else if (error.request) {
    console.error('No response received:', error.request);
    throw new Error('No response from server. Please check your connection.');
  } else {
    throw new Error(error.message);
  }
};

// API calls for each data requirement
export const fetchQuickLinks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/quick-links`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchMainSlider = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/main-slider`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchElektronikFirsatlar = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/elektronik-firsatlar`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchSanaOzelOneriler = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sana-ozel-oneriler`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};