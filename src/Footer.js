import React from 'react';
import appLogo from './images/tspAppLogo.png';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const appName = 'TrailStatusPro';
  const contactEmail = 'info@trailstatuspro.com';

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logos">
          <img src={appLogo} alt="App Logo" className="footer-logo" />
          <a href="/download" className="footer-download-button">
            Download
          </a>
        </div>
        <a href={`mailto:${contactEmail}`} className="footer-contact">
          {contactEmail}
        </a>
        <p className="footer-copyright">
          &copy;{new Date().getFullYear()} {appName}
        </p>
      </div>
      <div className="footer-right">
        <a
          href="https://instagram.com/myapp"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
