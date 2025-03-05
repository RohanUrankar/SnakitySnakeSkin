import { Link as ScrollLink } from 'react-scroll';
import { getCloudinaryUrl } from '../services/api';

const Hero = () => {
  const backgroundImageId = 'https://res.cloudinary.com/dl5bo3tq5/image/upload/v1735884150/snakity-gallery/background_image.png';

  return (
    <section className="relative min-h-screen">
      {/* Background Image with fade */}
      <div className="absolute inset-0 z-0">
       
<img 
  src={`https://res.cloudinary.com/dl5bo3tq5/image/upload/w_2000,c_fill,q_auto,f_auto,e_saturation:30,e_brightness:5/snakity-gallery/background_image`}
  alt="Artistic background"
  className="w-full h-full object-cover opacity-85"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-7xl md:text-8xl font-bold mb-8 text-white tracking-wide leading-tight">
          Digital Dreams
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-16 font-medium tracking-wide">
          Exploring consciousness through color and form
        </p>
        
        <div className="flex gap-8 justify-center">
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-10 py-4 bg-white/95 backdrop-blur-sm text-black rounded-full 
                     font-medium tracking-wide hover:bg-white hover:scale-105 
                     transition-all duration-300 shadow-lg cursor-pointer"
          >
            View Gallery
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-10 py-4 border-2 border-white/95 backdrop-blur-sm rounded-full 
                     text-white font-medium tracking-wide hover:bg-white hover:text-black 
                     hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Commission Art
          </ScrollLink>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;