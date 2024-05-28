import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landingpage";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Favorite from "./Pages/Favorite";
import MediaTracking from "./Pages/MediaTracking";
import VerificationPage from "./Pages/VerificationPage";
import Dashboard from "./Pages/Dashboard";
import FAQ from "./Pages/FAQ";
import Settings from "./Pages/Settings";
import FetchMovies from "./Pages/FetchMovies";
import Watchlist from "./Pages/Watchlist";
import Playlist from "./Pages/Playlist";
import { useState } from "react";
import "./App.css";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="VerificationPage" element={<VerificationPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route
            path="/MediaTracking"
            element={
              <MediaTracking playlist={playlist} setPlaylist={setPlaylist} />
            }
          />
          <Route
            path="/Playlist"
            element={<Playlist playlist={playlist} setPlaylist={setPlaylist} />}
          />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="MediaTracking" element={<MediaTracking />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Settings" element={<Settings />} />
          <Route
            path="/FetchMovies"
            element={
              <FetchMovies watchlist={watchlist} setWatchlist={setWatchlist} />
            }
          />
          <Route
            path="/Watchlist"
            element={
              <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
