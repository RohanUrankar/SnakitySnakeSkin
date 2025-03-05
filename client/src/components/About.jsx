import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isDevelopment = import.meta.env.DEV;

  const images = [
    {
      id: 1,
      filename: '1733324143573.jpg',
      url: 'https://res.cloudinary.com/dl5bo3tq5/image/upload/v1/snakity-gallery/1733324143573.jpg'
    },
    {
      id: 2,
      filename: '1733324250821.jpeg',
      url: 'https://res.cloudinary.com/dl5bo3tq5/image/upload/v1/snakity-gallery/1733324250821.jpeg'
    },
    // Add more images as needed
  ];

  const getImageUrl = (image) => {
    if (isDevelopment) {
      return `/images/${image.filename}`;
    }
    return image.url;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="lg:w-1/2 h-screen relative overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={getImageUrl(images[currentImageIndex])}
            alt="Portfolio work"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl lg:text-5xl font-light text-coral-300">About</h1>
          
          <div className="space-y-6 text-white/80">
            <p className="text-xl font-light leading-relaxed">
              Exploring the boundaries between digital art and consciousness, SnakitySnakeSkin creates 
              vivid psychedelic artworks that challenge perception and reality.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-coral-300 mb-3">Vision</h2>
                <p className="font-light leading-relaxed">
                  Through digital manipulation and bold color choices, each piece aims to 
                  transport viewers into alternative states of consciousness.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-coral-300 mb-3">Process</h2>
                <p className="font-light leading-relaxed">
                  Combining traditional artistic techniques with digital tools to create 
                  unique visualizations of inner landscapes and emotional states.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;