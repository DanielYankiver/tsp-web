import React, { useState, useEffect } from 'react';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';

const PhotoSlider = () => {
  const photos = [
    photo1, // Path relative to the public folder
    photo2,
    photo3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [photos.length]);

  return (
    <div style={styles.slider}>
      <img
        src={photos[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  slider: {
    width: '300px', // Adjusted for portrait orientation
    height: '600px', // Adjusted for portrait orientation
    overflow: 'hidden',
    position: 'relative',
    margin: 'auto',
    border: '2px solid #ccc',
    borderRadius: '10px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the photo fits nicely within the portrait frame
    transition: 'opacity 0.5s ease-in-out',
  },
};

export default PhotoSlider;
