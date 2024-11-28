import React, { useState } from 'react';
import tspAppLogo from './images/tspAppLogo.png';

const SmartAppBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div style={styles.banner}>
          <div style={styles.content}>
            <button onClick={handleClose} style={styles.closeButton}>
              ✕
            </button>
            <img src={tspAppLogo} alt="App Icon" style={styles.icon} />
            <div style={styles.text}>
              <p style={styles.title}>Try Trails Status Pro Free</p>
              <p style={styles.subtitle}>Only in the app store</p>
            </div>
          </div>
          <div style={styles.actions}>
            <a href="https://example.com" style={styles.downloadButton}>
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    position: 'relative', // Changed from fixed
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '60px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft: '-8px',
    marginRight: '10px',
  },
  icon: {
    width: '30px',
    height: '30px',
    borderRadius: '10px',
    marginRight: '5px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: 0,
    fontSize: '12px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 0,
    fontSize: '12px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#fff',
    color: '#007BFF',
    fontSize: '12px',
    padding: '8px 12px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '5px',
  },
};

export default SmartAppBanner;
