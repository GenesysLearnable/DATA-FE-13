// import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../Pages/Dashboard.css";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router";

function Dashboard() {
  return (
    <div className="dashboard">
      <NavBar />
      <Menu />
    </div>
  );
}

function Menu() {
  return (
    <div className="dash-main">
      <Description />
      <Recommended />
    </div>
  );
}

function Description() {
  const navigate = useNavigate();

  function handlePlaylist() {
    navigate("/Playlist");
  }

  function handleWatchlist() {
    navigate("/Watchlist");
  }

  return (
    <div>
      <h1>Good Morning</h1>
      <div className="des-container">
        <div className="des-con-items">
          <h3>Your Personal Entertainment Hub</h3>
          <p>Keep track of music and movies anywhere, anytime</p>
          <div className="des-button">
            <button onClick={handlePlaylist}>Playlist</button>
            <button onClick={handleWatchlist}>Watchlist</button>
          </div>
        </div>
        <img src="Group-16.png" alt="movie" className="des-img" />
      </div>
    </div>
  );
}

function Recommended() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleAddMusic() {
    navigate("/MusicPage");
  }
  function handleAddMovie() {
    navigate("/FetchMovies");
  }
  function handleIntegrate() {
    setShowModal(true);
  }

  return (
    <div className="h-card">
      <h2 id="h-card-h2">Recommended To Do</h2>
      <div className="recomend">
        <Card backgroundImage="../Frame1438.png">
          <h3>Add music manually</h3>
          <span onClick={handleAddMusic}>&#43;</span>
        </Card>
        <Card backgroundImage="../Frame438.png">
          <h3>Add movies manually</h3>
          <span onClick={handleAddMovie}>&#43;</span>
        </Card>
        <Card backgroundImage="../Frame143.png">
          <h3>Link with platform</h3>
          <span onClick={handleIntegrate}>&#43;</span>
        </Card>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Dashboard;
