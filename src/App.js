import './App.css';
import Footer from './Footer';
import InfoSlider from './infoSlider';
import PhotoSlider from './PhotoSlider';
import SmartAppBanner from './smartAppBanner';

function App() {
  return (
    <div className="App">
      <div className="smartAppBannerContainer">
        <SmartAppBanner />
      </div>
      <div className="app-container">
        <div className="app-title">Trail Status Pro</div>
        <div className="slider-container">
          <PhotoSlider />
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
