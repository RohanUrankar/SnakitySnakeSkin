import express from 'express';
import { getArtworks, createArtwork, deleteArtwork } from '../controllers/artworkController.js';
import multer from 'multer';
import { cloudinary } from '../server.js';

// Configure multer for temporary storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Helper function to upload to Cloudinary
const uploadToCloudinary = async (file) => {
  try {
    // Convert buffer to base64
    const b64 = Buffer.from(file.buffer).toString('base64');
    const dataURI = `data:${file.mimetype};base64,${b64}`;
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: 'auto',
      folder: 'portfolio', // Creates a folder in Cloudinary
      quality: 'auto', // Automatic quality optimization
      fetch_format: 'auto', // Automatic format optimization
    });

    return {
      url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};

// Routes
router.get('/', getArtworks);

router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    // Upload to Cloudinary first
    const cloudinaryResult = await uploadToCloudinary(req.file);
    
    // Add the Cloudinary URL to the request body
    req.body.imageUrl = cloudinaryResult.url;
    req.body.publicId = cloudinaryResult.public_id;

    // Pass to the controller
    await createArtwork(req, res);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    // Get the public_id from your database before deleting the artwork
    // You'll need to modify your deleteArtwork controller to handle this
    const publicId = req.body.publicId; // You'll need to send this from frontend
    
    if (publicId) {
      // Delete from Cloudinary
      await cloudinary.uploader.destroy(publicId);
    }
    
    // Then proceed with database deletion
    await deleteArtwork(req, res);
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;