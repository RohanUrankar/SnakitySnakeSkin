import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getArtworks } from '../services/api';
import { getImageUrl } from '../utils/imageUtils';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const data = await getArtworks();
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };
    fetchArtworks();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gallery" className="min-h-screen relative w-full">
      <div 
        className="fixed inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none"
        style={{
          opacity: Math.min(scrollY / 500, 1),
          transition: 'opacity 0.3s ease-out'
        }}
      />

      <div className="relative z-10 w-full h-[60vh] flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[5vw] font-light text-coral-300 leading-none tracking-tight px-4 text-center"
          style={{
            opacity: 1 - Math.max(0, Math.min((scrollY - 100) / 200, 1))
          }}
        >
          Design works and Illustration
        </motion.h1>
      </div>

      <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-3 pb-32">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer break-inside-avoid mb-3"
          >
            <div className="overflow-hidden bg-gray-900 w-full">
              <img
                src={getImageUrl(artwork)}
                alt={artwork.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 flex items-end p-6">
              <h3 className="text-white text-2xl font-light tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {artwork.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer - Updated styling */}
<footer className="relative z-10 w-full bg-black py-12 border-t border-white/10 mt-auto">
  <div className="flex justify-center space-x-8">
    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Be</a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">𝕏</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Ig</a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Fb</a>
    <a href="mailto:contact@example.com" className="text-white/70 hover:text-white transition-colors">@</a>
  </div>
  <p className="text-center text-white/50 text-sm mt-8">
    © 2024 by SnakitySnakeSkin
  </p>
</footer>
    </section>
  );
};

export default Gallery;