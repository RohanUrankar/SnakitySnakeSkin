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
  if (isDevelopment) {
    return `/images/${artwork.filename}`;
  } else {
    // Remove the "v1/" part that's causing the issue
    return artwork.imageUrl || `https://res.cloudinary.com/dl5bo3tq5/image/upload/snakity-gallery/${artwork.filename}`;
  }
};

export const getMockArtworks = () => {
  if (isDevelopment) {
    return defaultImages;
  }
  return [];
};