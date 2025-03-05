import axios from 'axios';
import { defaultImages } from '../utils/imageUtils';

const isDevelopment = import.meta.env.DEV;
const API_URL = import.meta.env.VITE_API_URL;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const getArtworks = async () => {
  if (isDevelopment) {
    return defaultImages;
  }
  try {
    const response = await axios.get(`${API_URL}/artworks`);
    // If the API doesn't return imageUrl, construct it
    const artworks = response.data.map(artwork => ({
      ...artwork,
      imageUrl: artwork.imageUrl || `https://res.cloudinary.com/dl5bo3tq5/image/upload/v1/snakity-gallery/${artwork.filename}`
    }));
    return artworks;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    // Fallback to default images in case of error
    return defaultImages;
  }
};

export const getCloudinaryUrl = (publicId, options = {}) => {
  const transformations = options.transformations || '';
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

export const sendContactMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response.data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};

