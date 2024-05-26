// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import NavBar from "../Components/NavBar";
// import "./FetchMovies.css";

// function SearchMovies() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     if (search.trim() === "") {
//       setMovies([]);
//       return;
//     }

//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           `http://www.omdbapi.com/?apikey=4617dbc&s=${search}`
//         );
//         const data = await response.json();
//         if (data.Response === "True") {
//           setMovies(data.Search);
//         } else {
//           setMovies([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//         setMovies([]);
//       }
//     };

//     fetchMovies();
//   }, [search]);

//   return (
//     <div className="fetchmovies">
//       <NavBar />
//       <div className="movie-section">
//         <section className="content-wrapper">
//           <div className="content-container">
//             <h1 className="section-title">Search for Movies</h1>
//             <Search search={search} setSearch={setSearch} />
//             <div className="category-container">
//               <button className="category-button">Movies</button>
//               <button className="category-button">Watchlist</button>
//             </div>
//           </div>
//         </section>

//         <section>
//           <MovieList movies={movies} />
//         </section>
//       </div>
//     </div>
//   );
// }

// function Search({ search, setSearch }) {
//   return (
//     <div className="search-container">
//       <div className="search-input">
//         <FaSearch className="search-icon" />
//         <input
//           type="text"
//           className="search-text"
//           placeholder="Search for the movies"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }

// function MovieList({ movies }) {
//   return (
//     <ul className="list">
//       {movies?.map((movie) => (
//         <Movie movie={movie} key={movie.imdbID} />
//       ))}
//     </ul>
//   );
// }

// function Movie({ movie }) {
//   return (
//     <li className="listed">
//       <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       <h3>{movie.Title}</h3>
//       <div>
//         <p>
//           <span>{movie.Year}</span>
//         </p>
//       </div>
//     </li>
//   );
// }

// export default SearchMovies;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import MovieModal from "../Components/MovieModal";
import NavBar from "../Components/NavBar";
import "./FetchMovies.css";
import { useNavigate } from "react-router-dom";

function SearchMovies({ watchlist, setWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim() === "") {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      // try {
      //   const response = await fetch(
      //     `http://www.omdbapi.com/?apikey=4617dbc&s=${search}`
      //   );
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=4617dbc&s=${search}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [search]);

  const handleMovieClick = async (movieId) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=4617dbc&i=${movieId}`
      );
      const data = await response.json();
      setSelectedMovie(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching movie details: ", error);
    }
  };

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    setNotification(`${movie.Title} has been added to your watchlist.`);
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    setIsModalOpen(false);
  };

  const handleRemoveFromWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.imdbID !== movieId)
    );
    setIsModalOpen(false);
  };

  return (
    <div className="fetchmovies">
      <NavBar />
      <div className="smovie">
        <div className="movie-section">
          <section className="content-wrapper">
            {/* <div className="content-container">
              <h1 className="section-title">Search for Movies</h1>
              <Search search={search} setSearch={setSearch} />
              <div className="category-container">
                <button className="category-button">Movies</button>
                <button
                  className="category-button"
                  // onClick={() => navigate("/watchlist")}
                >
                  Watchlist
                </button>
              </div>
            </div> */}
            <div className="content-container">
              <h1 className="section-title">Search for Movies</h1>
              <Search search={search} setSearch={setSearch} />
              <div className="category-container">
                <button className="category-button">Movies</button>
                <button
                  className="category-button"
                  onClick={() => navigate("/watchlist")}
                >
                  Watchlist
                </button>
              </div>
              {notification && (
                <div className="notification">{notification}</div>
              )}
            </div>
          </section>
        </div>

        <section>
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </section>
        {/* 
        <MovieModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          movie={selectedMovie}
        /> */}
        {selectedMovie && (
          <MovieModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            movie={selectedMovie}
            onAddToWatchlist={handleAddToWatchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
            isInWatchlist={watchlist.some(
              (movie) => movie.imdbID === selectedMovie.imdbID
            )}
          />
        )}
      </div>
    </div>
  );
}

function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <div className="search-input">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-text"
          placeholder="Search for the movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

function MovieList({ movies, onMovieClick }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onMovieClick={onMovieClick} />
      ))}
    </ul>
  );
}

function Movie({ movie, onMovieClick }) {
  return (
    <li className="listed" onClick={() => onMovieClick(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default SearchMovies;
