import React, { useState } from 'react';

const SmartAppBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div style={styles.banner}>
        <div style={styles.content}>
          <img
            src="https://via.placeholder.com/50" // Replace with your app icon URL
            alt="App Icon"
            style={styles.icon}
          />
          <div style={styles.text}>
            <h3 style={styles.title}>Your App Name</h3>
            <p style={styles.subtitle}>
              Get the best experience by downloading our app!
            </p>
          </div>
        </div>
        <div style={styles.actions}>
          <a
            href="https://example.com" // Replace with your app store URL
            style={styles.downloadButton}
          >
            Download
          </a>
          <button onClick={handleClose} style={styles.closeButton}>
            ✕
          </button>
        </div>
      </div>
    )
  );
};

const styles = {
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    marginRight: '15px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#fff',
    color: '#007BFF',
    padding: '8px 12px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SmartAppBanner;
