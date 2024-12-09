import React, { useState, useEffect } from 'react';
import signInPhoto from './images/signInPhoto.png';
import explorePhoto from './images/explorePhoto.png';
import favoritesPhoto from './images/favoritesPhoto.png';
import eventsPhoto from './images/eventsPhoto.png';
import trailMapsPhoto from './images/trailMapsPhoto.png';
import './PhotoSlider.css'; // Import the CSS file

const PhotoSlider = () => {
  const photos = [
    signInPhoto,
    explorePhoto,
    favoritesPhoto,
    eventsPhoto,
    trailMapsPhoto,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change photo every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [photos.length]);

  return (
    <div className="slider">
      <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default PhotoSlider;
