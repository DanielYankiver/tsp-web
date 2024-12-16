import React from 'react';
import ProfileInfo from './images/ProfileInfo.png';
import ExploreInfo from './images/ExploreInfo.png';
import TrailsInfo from './images/TrailsInfo.png';
import EventsInfo from './images/EventsInfo.png';
import MapsInfo from './images/MapsInfo.png';
import './infoSlider.css';

const InfoSlider = () => {
  const images = [ProfileInfo, ExploreInfo, TrailsInfo, EventsInfo, MapsInfo];

  return (
    <div className="horizontal-scroll">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default InfoSlider;
