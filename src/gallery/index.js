import './index.css';
import ImageSlider from './components/ImageSlider';
import Description from './components/Description';
import { SliderData } from './components/SliderData';

const GalleryApp = () => {
  return (
    <div className="Gallery">
    <Description />
    <ImageSlider slides={SliderData} />
    </div>
  );
}

export default GalleryApp;
