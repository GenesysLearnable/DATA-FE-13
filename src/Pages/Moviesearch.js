import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import myKey from "./Mykey";
import "./Moviesearch.css";

import NavBar from "../Components/NavBar";

Modal.setAppElement("#root"); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const Moviesearch = () => {
  const [searchItems, setSearchItems] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSearchHandler = () => {
    if (!searchItems.trim()) {
      alert("Please input a movie name.");
      return;
    }

    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?s=${searchItems}&apiKey=${myKey}`,
    })
      .then((response) => {
        const searchResults = response.data.Search || [];
        const movieDetailsPromises = searchResults.map((movie) =>
          axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apiKey=${myKey}`)
        );

        Promise.all(movieDetailsPromises)
          .then((detailsResponses) => {
            const detailedMovies = detailsResponses.map((res) => res.data);
            setMovies(detailedMovies);
            console.log(detailedMovies);
          })
          .catch((error) => {
            console.error("Error fetching detailed movie data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (searchItems.trim()) {
      onSearchHandler();
    }
  }, [searchItems]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="layout">
      <div>{NavBar}</div>
      <section className="movie-manually">
        <div className="container">
          <header className="h1">Add movies manually</header>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search for the movies you’ve watched, you can add multiple times"
              className="search-input"
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
            />
            <button
              type="button"
              className="search-btn"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </form>
          <div className="switch-btn">
            <button className="music-btn swt">Music</button>
            <button className="video-btn">Video</button>
          </div>
        </div>
        <div className="movies-list">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="movies"
              onClick={() => openModal(movie)}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <div className="big">
                <p>
                  <strong>Title:</strong> {movie.Title}
                </p>
                <p>
                  <strong>Year:</strong> {movie.Year}
                </p>
                <p>
                  <strong>Type:</strong> {movie.Type}
                </p>
                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>Language:</strong> {movie.Language}
                </p>
                {movie.Type === "series" && (
                  <p>
                    <strong>Seasons:</strong> {movie.totalSeasons || "N/A"}
                  </p>
                )}
                <button className="add-btn">Add</button>
              </div>
            </div>
          ))}
        </div>

        {selectedMovie && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Movie Details"
            className="modal"
            overlayClassName="overlay"
          >
            <button onClick={closeModal} className="close-modal">
              X
            </button>
            <div className="modal-content">
              <h2>{selectedMovie.Title}</h2>
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
              <p>
                <strong>Year:</strong> {selectedMovie.Year}
              </p>
              <p>
                <strong>Type:</strong> {selectedMovie.Type}
              </p>
              <p>
                <strong>Actors:</strong> {selectedMovie.Actors}
              </p>
              <p>
                <strong>Language:</strong> {selectedMovie.Language}
              </p>
              <p>
                <strong>Plot:</strong> {selectedMovie.Plot}
              </p>
              {selectedMovie.Type === "series" && (
                <p>
                  <strong>Seasons:</strong>{" "}
                  {selectedMovie.totalSeasons || "N/A"}
                </p>
              )}
            </div>
          </Modal>
        )}
      </section>
    </div>
  );
};

export default Moviesearch;
