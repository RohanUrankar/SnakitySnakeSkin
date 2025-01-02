import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: { type: String, required: true },
  category: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Artwork', artworkSchema);