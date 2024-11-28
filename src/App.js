import './App.css';
import PhotoSlider from './PhotoSlider';
import SmartAppBanner from './smartAppBanner';

function App() {
  return (
    <div className="App">
      <div className={styles.smartAppBannerContainer}>
        <SmartAppBanner />
      </div>
      <div className="slider-container">
        <PhotoSlider />
      </div>
    </div>
  );
}

const styles = {
  smartAppBannerContainer: {},
};

export default App;
