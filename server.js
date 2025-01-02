import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import artworkRoutes from './routes/artworkRoutes.js';
import contactRoutes from './routes/contactRoutes.js';


// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.com'] // We'll update this later
    : ['http://localhost:5173']
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/artworks', artworkRoutes);

app.use('/uploads', express.static('uploads'));

app.use('/api/contact', contactRoutes);


// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SnakitySnakeSkin API' });
});

// Create uploads directory if it doesn't exist
import fs from 'fs';
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Uploads directory:', uploadsDir);
});