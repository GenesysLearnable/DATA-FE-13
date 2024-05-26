import NavBar from "../Components/NavBar";

// function Playlist() {
//   return (
//     <div>
//       <NavBar />
//     </div>
//   );
// }

// export default Playlist;

import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import "./Playlist.css";

function Playlist({ playlist, setPlaylist }) {
  const removeFromPlaylist = (uri) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((item) => item.uri !== uri)
    );
  };

  return (
    <div className="playlist-section">
      <NavBar />
      <div className="playlist-page">
        <h1>Playlist</h1>
        <Link to="/MusicPage" className="back-link">
          Go to Search
        </Link>
        <ul className="playlist-ul">
          {playlist.map((item) => (
            <li key={item.uri} className="playlist-item">
              <img
                src={item.albumOfTrack.coverArt.sources[0].url}
                alt={item.albumOfTrack.name}
                width="64"
                height="64"
              />
              <div className="track-details">
                <strong>{item.name}</strong>
                <p>
                  by{" "}
                  {item.artists.items
                    .map((artist) => artist.profile.name)
                    .join(", ")}
                </p>
                {/* <p className="album">Album: {item.albumOfTrack.name}</p> */}
                {/* <button onClick={() => removeFromPlaylist(item.uri)}>
                Remove
              </button> */}
              </div>
              <FaMinus
                onClick={() => removeFromPlaylist(item.uri)}
                className="del-button"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
