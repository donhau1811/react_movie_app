import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerComponent from "./components/NavBar/DrawerComponent";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import TvSeries from "./pages/TvSeries";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <DrawerComponent />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/series" element={<TvSeries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
