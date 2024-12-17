import React from 'react';
import Explore from './images/ExploreCarousel.png';
import TrailDetails from './images/TrailDetailsCarousel.png';
import Map from './images/MapCarousel.png';
import Events from './images/EventsCarousel.png';
import Volunteer from './images/VolunteerCarousel.png';
import './infoSlider.css';

const InfoSlider = () => {
  const images = [Explore, Map, Events, TrailDetails, Volunteer];

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
