import React from 'react';
import Explore from './images/ExploreCarouselOpt.jpg';
import Map from './images/MapCarouselOpt.jpg';
import Events from './images/EventsCarouselOpt.jpg';
import TrailDetails from './images/TrailDetailsCarouselOpt.jpg';
import Volunteer from './images/VolunteerCarouselOpt.jpg';
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
