import './App.css';
import PhotoSlider from './photoSlider';
import SmartAppBanner from './smartAppBanner';

function App() {
  return (
    <div className="App">
      <div className="smart-app-banner-container">
        <SmartAppBanner />
      </div>
      <div className="slider-container">
        <PhotoSlider />
      </div>
    </div>
  );
}

export default App;
