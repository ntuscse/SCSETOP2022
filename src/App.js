import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homepage";
import Welcome from "./welcome2";
import GalleryApp from "./gallery";
import Committee from "./committee";
import Top5 from "./top5";
import Gallery from "./gallery2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./photos";
import Committee2 from "./committe2";

function Home() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <Welcome></Welcome>
      <Gallery></Gallery>
      <Top5></Top5>
      <Committee2 />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
