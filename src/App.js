import './App.css';
import PhotoSlider from './PhotoSlider';
import SmartAppBanner from './smartAppBanner';

function App() {
  return (
    <div className="App">
      <div className="smartAppBannerContainer">
        <SmartAppBanner />
      </div>
      <div className="app-container">
        <div>The only app for getting your trail status</div>
        <div className="slider-container">
          <PhotoSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
