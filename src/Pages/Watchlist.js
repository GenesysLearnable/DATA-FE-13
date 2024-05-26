// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../Pages/FetchMovie.css";

// function Watchlist({ watchlist, setWatchlist }) {
//   const navigate = useNavigate();

//   const handleRemoveFromWatchlist = (movieId) => {
//     setWatchlist((prevWatchlist) =>
//       prevWatchlist.filter((movie) => movie.imdbID !== movieId)
//     );
//   };

//   return (
//     <div className="watchlist-container">
//       <h1 className="section-title">Your Watchlist</h1>
//       <button className="category-button" onClick={() => navigate("/")}>
//         Back to Search
//       </button>
//       <ul className="list">
//         {watchlist.map((movie) => (
//           <li className="listed" key={movie.imdbID}>
//             <img src={movie.Poster} alt={`${movie.Title} poster`} />
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//             <button onClick={() => handleRemoveFromWatchlist(movie.imdbID)}>
//               Remove from Watchlist
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Watchlist;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./FetchMovies.css";
import "./Watchlist.css";
import NavBar from "../Components/NavBar";
import { FaTrash } from "react-icons/fa";

function Watchlist({ watchlist, setWatchlist }) {
  const navigate = useNavigate();

  const handleRemoveFromWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.imdbID !== movieId)
    );
  };

  return (
    <div className="wl-page">
      <NavBar />
      <div className="watchlist-container">
        <h1 className="section-title">Your Watchlist</h1>
        <button
          className="category-button"
          onClick={() => navigate("/FetchMovies")}
        >
          Go to Search
        </button>
        <div className="added">
          {watchlist.length === 0 ? (
            <p className="msg">No movies currently in your watchlist</p>
          ) : (
            <ul className="w-list">
              {watchlist.map((movie) => (
                <li className="w-listed" key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  {/* <button
                    onClick={() => handleRemoveFromWatchlist(movie.imdbID)}
                    className="rmv-button"
                  >
                    - My List
                  </button> */}
                  <FaTrash
                    onClick={() => handleRemoveFromWatchlist(movie.imdbID)}
                    className="rmv-button"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
