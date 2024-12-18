import React, { useState } from 'react';
import tspAppLogo from './images/tspAppLogo.png';
import './smartAppBanner.css';

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
            <a
              href="https://www.instagram.com/trailstatuspro?igsh=cjV4Zm9hdWEzbWs"
              target="_blank"
              rel="noopener noreferrer"
              className="downloadButton"
            >
              Coming Soon
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartAppBanner;
