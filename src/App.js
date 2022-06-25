import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homepage";
import Welcome from "./welcome2";
import GalleryApp from "./gallery";
import Committee from "./committee";
import Top5 from "./top5";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* uncommment your respective one to work on */}
        {/* <HomePage></HomePage> Ranjan */}
        <Welcome></Welcome> {/* Greg */}
        <GalleryApp></GalleryApp> {/* Guo Yong */}
        <Top5></Top5>
        <div className="test">
          <h1>Committee part</h1>
          <p>TOP 5</p>
          <p>Main Comms</p>
          <p>Sub Comms</p>
        </div>
        {/* <Committee></Committee> Brandon */}
      </div>
    </DndProvider>
  );
}

export default App;
