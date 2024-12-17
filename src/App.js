import './App.css';
import Footer from './Footer';
import InfoSlider from './infoSlider';
import PhotoSlider from './PhotoSlider';
import TrailSystemView from './images/TrailSystemMain.png';
import SmartAppBanner from './smartAppBanner';

function App() {
  return (
    <div className="App">
      <div className="smartAppBannerContainer">
        <SmartAppBanner />
      </div>
      <div className="app-container">
        <div className="app-title">TRAIL STATUS PRO</div>
        <div className="slider-container">
          <img
            src={TrailSystemView}
            alt="trail systems view"
            className="trail-systems-image"
          />
        </div>
      </div>
      <div className="info-section">
        <div className="info-section-title">What's New</div>
        <InfoSlider />
      </div>
      {/* <div className="admin-section">
        <div className="admin-section-title">Admin Ready</div>
      </div> */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
