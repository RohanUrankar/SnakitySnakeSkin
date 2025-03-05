import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  publicId: {  // Add this field for Cloudinary
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Artwork', artworkSchema);