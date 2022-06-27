import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homepage";
import Welcome from "./welcome2";
import GalleryApp from "./gallery";
import Committee from "./committee";
import Top5 from "./top5";

function App() {
  return (
    <div className="App">
      {/* uncommment your respective one to work on */}
      <HomePage></HomePage>
      <Welcome></Welcome> {/* Greg */}
      <GalleryApp></GalleryApp> {/* Guo Yong */}
      <Top5></Top5>
      <div className="test">
        <h1>Committee part</h1>
        <p>TOP 5</p>
        <p>Main Comms</p>
        <p>Sub Comms</p>
      </div>
      <Committee></Committee>
    </div>
  );
}

export default App;
