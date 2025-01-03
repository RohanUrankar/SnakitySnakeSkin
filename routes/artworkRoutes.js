import express from 'express';
import { getArtworks, createArtwork, deleteArtwork } from '../controllers/artworkController.js';
import multer from 'multer';

// Configure multer for temporary storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.get('/', getArtworks);
router.post('/', upload.single('image'), createArtwork);
router.delete('/:id', deleteArtwork);  // Add this line


export default router;