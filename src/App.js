import logo from './logo.svg';
import './App.css';
import HomePage from './homepage';
import Welcome2 from './welcome2';
import Gallery from './gallery2';
import Committee from './committee';


function App() {
  return (
    <div className="App">

      {/* uncommment your respective one to work on */}

      <HomePage></HomePage> {/* Ranjan */}
      <Welcome2></Welcome2> {/* Greg */}
      <Gallery></Gallery> {/* Guo Yong */}
      <Committee></Committee> {/* Brandon */}
    </div>
  );
}

export default App;
