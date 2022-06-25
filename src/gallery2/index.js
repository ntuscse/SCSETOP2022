import './index.css';
import Stack from './components/Stack';
import Description from './components/Description';
import { SliderData } from './components/SliderData';

const Gallery = () => {
  return (
    <div className="Gallery">
    <Description />
    <Stack slides={SliderData} />
    </div>
  );
}

export default Gallery;
