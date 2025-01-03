import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import connectDB from './config/db.js';
import artworkRoutes from './routes/artworkRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['https://snakity.netlify.app', 'http://localhost:5173'],
  credentials: true
}));

// Routes
app.use('/api/artworks', artworkRoutes);
app.use('/api/contact', contactRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SnakitySnakeSkin API' });
});

// Test endpoint for Cloudinary
app.get('/api/test-cloudinary', async (req, res) => {
  try {
    const result = await cloudinary.api.resources();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { cloudinary }; // Export for use in other files