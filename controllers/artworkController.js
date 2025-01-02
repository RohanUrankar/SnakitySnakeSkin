import Artwork from '../models/Artwork.js';

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
    const artwork = new Artwork({
      ...req.body,
      imageUrl: req.file.path,
      // Remove user field for now since we removed auth
      // user: req.user._id
    });
    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};