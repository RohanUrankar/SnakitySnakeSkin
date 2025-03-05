import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="w-full py-8 px-6 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Adjusted to be more to the left */}
        <Link to="/" className="text-3xl text-white font-semibold tracking-wide mr-auto">
          SnakitySnakeSkin
        </Link>
        
        {/* Center Navigation - Flex container to center the links */}
        <div className="flex items-center justify-center flex-grow space-x-12">
          {['HOME', 'WORK', 'ABOUT', 'CONTACT'].map((item) => (
            <Link
              key={item}
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              className="text-white font-medium text-base tracking-widest hover:text-white/80 
                       transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Social Icons - Adjusted to be more to the right */}
        <div className="flex items-center space-x-6 ml-auto">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram strokeWidth={2.5} size={28} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"
          >
            <Facebook strokeWidth={2.5} size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;