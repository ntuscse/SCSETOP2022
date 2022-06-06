import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import Welcome from './welcome2';
import GalleryApp from './gallery/GalleryApp';
import Committee from './committee';


function App() {
  return (
    <div className="App">

      {/* uncommment your respective one to work on */}

      {/* <HomePage></HomePage> Ranjan */}
<<<<<<< Updated upstream
      <Welcome></Welcome>
=======
      <div style={{backgroundColor:"green", height:"00px"}}></div>
      <Welcome></Welcome> {/* Greg */}
>>>>>>> Stashed changes
      <GalleryApp></GalleryApp>
      {/* <Committee></Committee> Brandon */}
    </div>
  );
}

export default App;