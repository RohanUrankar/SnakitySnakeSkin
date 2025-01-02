import express from 'express';
import { getArtworks, createArtwork } from '../controllers/artworkController.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', getArtworks);
router.post('/', upload.single('image'), createArtwork); // Removed auth middleware

export default router;