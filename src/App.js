import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import Welcome2 from './welcome2';
//import GalleryApp from './gallery';
import Gallery2 from './gallery2';
import Welcome from './welcome';
import Gallery from './gallery';
import Committee from './committee';


function App() {
  return (
    <div className="App">

      {/* uncommment your respective one to work on */}

      <HomePage></HomePage> {/* Ranjan */}
      <Welcome2></Welcome2> {/* Greg */}
      <Gallery></Gallery> {/* Guo Yong */}
      <Committee></Committee> {/* Brandon */}
      {/* <HomePage></HomePage> Ranjan */}
      {/* <Welcome></Welcome> */}
      {/* <GalleryApp></GalleryApp> */}
      {/* <HomePage></HomePage> */}
      {/* <Welcome></Welcome> Greg */}
      {/* <Gallery></Gallery> Guo Yong */}
      {/* <Committee></Committee> Brandon */}
    </div>
  );
}

export default App;
