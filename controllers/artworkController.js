import Artwork from '../models/Artwork.js';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ createdAt: -1 });
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createArtwork = async (req, res) => {
  try {
    // Convert buffer to stream
    const stream = Readable.from(req.file.buffer);
    
    // Create upload stream
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'snakity-gallery',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      
      stream.pipe(uploadStream);
    });

    // Wait for upload to complete
    const result = await uploadPromise;

    const artwork = new Artwork({
      ...req.body,
      imageUrl: result.secure_url, // Use the Cloudinary URL
    });

    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }
    res.json({ message: 'Artwork deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};