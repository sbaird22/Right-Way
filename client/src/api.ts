import axios from 'axios';

// Define the base API URL
const API_URL = import.meta.env.VITE_API_URL;

// Fetch services dynamically
export const fetchServices = async () => {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
};

// Submit contact form
export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
};
