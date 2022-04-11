import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import TvSeries from "./pages/TvSeries";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
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
