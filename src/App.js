import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import Welcome from './welcome';
import GalleryApp from './gallery/GalleryApp';
import Committee from './committee';


function App() {
  return (
    <div className="App">

      {/* uncommment your respective one to work on */}

      {/* <HomePage></HomePage> Ranjan */}
      {/* <Welcome></Welcome> Greg */}
      <GalleryApp></GalleryApp>
      {/* <Committee></Committee> Brandon */}
    </div>
  );
}

export default App;