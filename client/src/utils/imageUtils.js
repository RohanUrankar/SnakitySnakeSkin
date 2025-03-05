const isDevelopment = import.meta.env.DEV;

export const defaultImages = [
  {
    _id: '1',
    title: 'Digital Art #1',
    filename: '1733324143573.jpg',
    imageUrl: ''
  },
  {
    _id: '2',
    title: 'Digital Art #2',
    filename: '1733324250821.jpeg',
    imageUrl: ''
  },
  {
    _id: '3',
    title: 'Digital Art #3',
    filename: '1735806076137.png',
    imageUrl: ''
  },
  {
    _id: '4',
    title: 'Digital Art #4',
    filename: '1735806165987.png',
    imageUrl: ''
  },
  {
    _id: '5',
    title: 'Digital Art #5',
    filename: '1735806280056.png',
    imageUrl: ''
  },
  {
    _id: '6',
    title: 'Digital Art #6',
    filename: '1735806294575.png',
    imageUrl: ''
  },
  {
    _id: '7',
    title: 'Digital Art #7',
    filename: '1735806311300.png',
    imageUrl: ''
  },
  {
    _id: '8',
    title: 'Digital Art #8',
    filename: '1735806339416.png',
    imageUrl: ''
  },
  {
    _id: '9',
    title: 'Digital Art #9',
    filename: '1735806355508.png',
    imageUrl: ''
  }
];

export const getImageUrl = (artwork) => {
  // For debugging
  console.log('Artwork being processed:', artwork);
  
  // Get cloudinary name from env
  const cloudName = 'dl5bo3tq5';
  
  if (isDevelopment) {
    return `/images/${artwork.filename}`;
  } else {
    // Check for specific artworks and hardcode the correct Cloudinary URLs
    // based on the screenshot you shared
    const cloudinaryIds = {
      '1': 'snakity-gallery/s8v5bvi8pfouj97opmzv',
      '2': 'snakity-gallery/ovaaxvfnoqcl7l8hxuyq',
      '3': 'snakity-gallery/cibeplvbcy9yn157emlm',
      '4': 'snakity-gallery/zahpx3xg2lbeeifgf2t0',
      '5': 'snakity-gallery/obptujfbj8s1gugzgtxi',
      '6': 'snakity-gallery/uzxc60x4xd6ck0wbgpml',
      '7': 'snakity-gallery/zahpx3xg2lbeeifgf210',
      '8': 'snakity-gallery/cdgpyruhffn4n7b6j1cs',
      '9': 'snakity-gallery/vptnenncrxlkyfou7xme'
    };
    
    // If we have a hardcoded ID for this artwork, use it
    if (cloudinaryIds[artwork._id]) {
      return `https://res.cloudinary.com/${cloudName}/image/upload/${cloudinaryIds[artwork._id]}`;
    }
    
    // Fallback to original approach
    return artwork.imageUrl || `https://res.cloudinary.com/${cloudName}/image/upload/snakity-gallery/${artwork.filename}`;
  }
};

export const getMockArtworks = () => {
  if (isDevelopment) {
    return defaultImages;
  }
  return [];
};