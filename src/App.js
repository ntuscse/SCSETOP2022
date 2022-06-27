import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homepage";
import Welcome from "./welcome2";
import GalleryApp from "./gallery";
import Committee from "./committee";
import Top5 from "./top5";
import Gallery from "./gallery2";
function App() {
  return (
    <div className="App">
      {/* uncommment your respective one to work on */}
      <HomePage></HomePage>
      <Welcome></Welcome> {/* Greg */}
      <Gallery></Gallery> {/* Guo Yong */}
      <Top5></Top5>
      <Committee></Committee>
    </div>
  );
}

export default App;
