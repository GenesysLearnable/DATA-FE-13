// import React from "react";
// import Modal from "react-modal";
// import "./MovieModal.css";

// Modal.setAppElement("#root"); // Set the root element for accessibility

// function MovieModal({ isOpen, onRequestClose, movie }) {
//   if (!movie) return null;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className="modal-content"
//       overlayClassName="modal-overlay"
//       contentLabel="Movie Details"
//     >
//       <div className="modal-header">
//         <button className="close-button" onClick={onRequestClose}>
//           &times;
//         </button>
//       </div>
//       <div className="modal-body">
//         <img src={movie.Poster} alt={`${movie.Title} poster`} />
//         <h2 className="modal-title">{movie.Title}</h2>
//         <p>{movie.Plot}</p>
//         <p>
//           <strong>Director:</strong> {movie.Director}
//         </p>
//         <p>
//           <strong>Year:</strong> {movie.Year}
//         </p>
//         <p>
//           <strong>Genre:</strong> {movie.Genre}
//         </p>
//         <p>
//           <strong>Rating:</strong> {movie.imdbRating}
//         </p>
//       </div>
//     </Modal>
//   );
// }

// export default MovieModal;

import React from "react";
import Modal from "react-modal";
import "./MovieModal.css";
import { FaBookmark, FaTrash } from "react-icons/fa";

Modal.setAppElement("#root"); // Set the root element for accessibility

// function MovieModal({ isOpen, onRequestClose, movie }) {
//   if (!movie) return null;

function MovieModal({
  isOpen,
  onRequestClose,
  movie,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
}) {
  if (!movie) return null;

  const handleAddToWatchlist = () => {
    onAddToWatchlist(movie);
    onRequestClose();
  };

  const handleRemoveFromWatchlist = () => {
    onRemoveFromWatchlist(movie.imdbID);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Movie Details"
    >
      <div className="modal-header"></div>
      <div className="modal-body">
        <button className="close-button" onClick={onRequestClose}>
          &times;
        </button>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h2 className="modal-title">{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Rating:</strong> {movie.imdbRating}
        </p>
      </div>
      <div className="modal-actions">
        {isInWatchlist ? (
          // <button onClick={handleRemoveFromWatchlist}>- My List</button>
          <FaTrash onClick={handleRemoveFromWatchlist} className="r-button" />
        ) : (
          // <button onClick={handleAddToWatchlist}>+ My List</button>
          <FaBookmark onClick={handleAddToWatchlist} className="add-button" />
        )}
      </div>
    </Modal>
  );
}

export default MovieModal;
