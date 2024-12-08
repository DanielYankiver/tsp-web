import React, { useState } from 'react';
import './smartAppBanner.css';
import tspAppLogo from './images/tspAppLogo.png';

const SmartAppBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="banner">
          <div className="content">
            <button onClick={handleClose} className="closeButton">
              ✕
            </button>
            <img src={tspAppLogo} alt="App Icon" className="icon" />
            <div className="text">
              <p className="title">Try Trails Status Pro Free</p>
              <p className="subtitle">Only in the app store</p>
            </div>
          </div>
          <div className="actions">
            <a href="https://example.com" className="downloadButton">
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartAppBanner;
