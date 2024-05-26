import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./MusicPage.css";
import { FaPlus, FaCheck, FaSearch, FaLessThan } from "react-icons/fa"; // Import FaCheck for the check mark
import NavBar from "../Components/NavBar";

function MusicPage({ setPlaylist, playlist }) {
  // Accept playlist as a prop
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [music, setMusic] = useState({ artists: [], tracks: [] });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (search || genre) {
      fetchMusic(search, genre);
    }
  }, [search, genre]);

  const fetchMusic = async (query, genre) => {
    const searchQuery = query ? query : "";
    const genreQuery = genre ? ` ${encodeURIComponent(genre)}` : "";
    const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
      searchQuery
    )}${genreQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "48ca3f9b54mshfeb202fbf2997a8p15551ajsn31a794372eb7",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMusic({
        artists: result.artists.items,
        tracks: result.tracks.items,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackToSearch = () => {
    setGenre("");
    setSearch("");
    setMusic({ artists: [], tracks: [] });
  };

  const addToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => {
      if (prevPlaylist.find((item) => item.uri === track.uri)) {
        setMessage("Music has already been added");
        setTimeout(() => setMessage(""), 3000);
        return prevPlaylist;
      }
      setMessage(`Added "${track.name}" to the playlist`);
      setTimeout(() => setMessage(""), 3000);
      return [...prevPlaylist, track];
    });
  };

  return (
    <section className="music-page">
      <NavBar />
      <div className="music">
        {(search || genre) && (
          <BackToSearchButton handleBackToSearch={handleBackToSearch} />
        )}
        {!genre && (
          <Search search={search} setSearch={setSearch} setGenre={setGenre} />
        )}
        {!(search || genre) && <GenreSelector setGenre={setGenre} />}

        {message && <div className="message">{message}</div>}
        {(search || genre) && (
          <MusicList
            music={music}
            addToPlaylist={addToPlaylist}
            playlist={playlist}
          /> // Pass playlist to MusicList
        )}
        {/* <Link to="/playlist" className="playlist-link">
        Go to Playlist
      </Link> */}
      </div>
    </section>
  );
}

function Search({ search, setSearch, setGenre }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setGenre(""); // Reset genre when a new search is initiated
  };

  return (
    <div className="search-section">
      <div className="m-search-input">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-text"
          placeholder="Search for songs or artists"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

function GenreSelector({ setGenre }) {
  const genres = [
    { name: "HipHop", color: "#FF5722" },
    { name: "RnB", color: "#2196F3" },
    { name: "Afrobeat", color: "#4CAF50" },
    { name: "Gospel", color: "#FFEB3B" },
    { name: "Pop", color: "#9C27B0" },
    { name: "Rock", color: "#795548" },
    { name: "Jazz", color: "#607D8B" },
    { name: "Classical", color: "#F44336" },
    { name: "Country", color: "#FF9800" },
  ];

  return (
    <div className="genre-selector">
      {genres.map((genre) => (
        <GenreCard key={genre.name} genre={genre} setGenre={setGenre} />
      ))}
    </div>
  );
}

function GenreCard({ genre, setGenre }) {
  const { name, color } = genre;

  const handleClick = () => {
    setGenre(name);
  };

  return (
    <div
      className="genre-card"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

function BackToSearchButton({ handleBackToSearch }) {
  return (
    <div className="back-to-search-container">
      <FaLessThan
        className="back-to-search-button"
        onClick={handleBackToSearch}
      />
      {/* <button className="back-to-search-button" onClick={handleBackToSearch}>
        Back to Search
      </button> */}
    </div>
  );
}

function MusicList({ music, addToPlaylist, playlist }) {
  return (
    <div className="music-list">
      <h2>Artists</h2>
      <div className="artist-list">
        <ul className="artist-ul">
          {music.artists.map((item) => (
            <Artist key={item.data.uri} item={item.data} />
          ))}
        </ul>
      </div>
      <h2>Songs</h2>
      <ul className="track-ul">
        {music.tracks.map((item) => (
          <Track
            key={item.data.uri}
            item={item.data}
            addToPlaylist={addToPlaylist}
            playlist={playlist} // Pass playlist to Track
          />
        ))}
      </ul>
    </div>
  );
}

function Artist({ item }) {
  const artistName = item?.profile?.name;
  const avatarImage = item?.visuals?.avatarImage?.sources?.[0]?.url;

  return (
    <section className="artist-section">
      <div className="artist-card">
        <div className="artist-details">
          <img
            src={avatarImage}
            alt={`${artistName} avatar`}
            className="artist-avatar"
          />
          <div className="artist-info">
            <strong>{artistName || "Unknown Artist"}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Track({ item, addToPlaylist, playlist }) {
  const trackName = item?.name;
  const albumName = item?.albumOfTrack?.name;
  const artistNames = item?.artists?.items
    ?.map((artist) => artist?.profile?.name)
    .join(", ");
  const albumCover = item?.albumOfTrack?.coverArt?.sources?.[0]?.url;
  const isInPlaylist = playlist.some((track) => track.uri === item.uri);

  return (
    <div className="track-list">
      <li>
        <img
          src={albumCover}
          alt={`${albumName} cover`}
          width="64"
          height="64"
        />
        <div className="track-details">
          <strong className="tr-name">{trackName || "Unknown Track"}</strong>
          <span className="by-artist">
            by {artistNames || "Unknown Artist"}
          </span>
          <p className="album">Album: {albumName || "Unknown Album"}</p>
        </div>
        {isInPlaylist ? (
          <FaCheck className="mark-icon" /> // Show check icon if in playlist
        ) : (
          <FaPlus onClick={() => addToPlaylist(item)} className="plus-button" />
        )}
      </li>
    </div>
  );
}

export default MusicPage;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./MusicPage.css";
// import { FaPlus } from "react-icons/fa";

// function MusicPage({ playlists, addToPlaylist }) {
//   const [search, setSearch] = useState("");
//   const [genre, setGenre] = useState("");
//   const [music, setMusic] = useState({ artists: [], tracks: [] });
//   const [message, setMessage] = useState("");
//   const [selectedTrack, setSelectedTrack] = useState(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState("");

//   useEffect(() => {
//     if (search || genre) {
//       fetchMusic(search, genre);
//     }
//   }, [search, genre]);

//   const fetchMusic = async (query, genre) => {
//     const searchQuery = query ? query : "";
//     const genreQuery = genre ? ` ${encodeURIComponent(genre)}` : "";
//     const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
//       searchQuery
//     )}${genreQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "48ca3f9b54mshfeb202fbf2997a8p15551ajsn31a794372eb7",
//         "x-rapidapi-host": "spotify23.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       setMusic({
//         artists: result.artists.items,
//         tracks: result.tracks.items,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBackToSearch = () => {
//     setGenre("");
//     setSearch("");
//     setMusic({ artists: [], tracks: [] });
//   };

//   const handleAddToPlaylist = (track) => {
//     setSelectedTrack(track);
//   };

//   const handlePlaylistSelection = (e) => {
//     setSelectedPlaylist(e.target.value);
//   };

//   const confirmAddToPlaylist = () => {
//     if (selectedPlaylist && selectedTrack) {
//       addToPlaylist(selectedTrack, selectedPlaylist);
//       setMessage("Added to Playlist!");
//       setTimeout(() => setMessage(""), 3000);
//       setSelectedTrack(null);
//       setSelectedPlaylist("");
//     } else {
//       setMessage("Please select a playlist.");
//       setTimeout(() => setMessage(""), 3000);
//     }
//   };

//   return (
//     <div>
//       <Search search={search} setSearch={setSearch} setGenre={setGenre} />
//       {!(search || genre) && <GenreSelector setGenre={setGenre} />}
//       {(search || genre) && (
//         <BackToSearchButton handleBackToSearch={handleBackToSearch} />
//       )}
//       {message && <div className="message">{message}</div>}
//       {(search || genre) && (
//         <MusicList
//           music={music}
//           handleAddToPlaylist={handleAddToPlaylist}
//           playlists={playlists}
//         />
//       )}
//       {selectedTrack && (
//         <div className="playlist-select-popup">
//           <h2>Select a playlist to add the track to:</h2>
//           <select value={selectedPlaylist} onChange={handlePlaylistSelection}>
//             <option value="" disabled>
//               Select a playlist
//             </option>
//             {Object.keys(playlists).map((name) => (
//               <option key={name} value={name}>
//                 {name}
//               </option>
//             ))}
//           </select>
//           <button onClick={confirmAddToPlaylist}>Add to Playlist</button>
//         </div>
//       )}
//       <Link to="/playlist" className="playlist-link">
//         Go to Playlist
//       </Link>
//     </div>
//   );
// }

// function Search({ search, setSearch, setGenre }) {
//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     setGenre(""); // Reset genre when a new search is initiated
//   };

//   return (
//     <div className="search-container">
//       <div className="search-input">
//         <input
//           type="text"
//           className="search-text"
//           placeholder="Search for songs or artists"
//           value={search}
//           onChange={handleSearchChange}
//         />
//       </div>
//     </div>
//   );
// }

// function GenreSelector({ setGenre }) {
//   const genres = [
//     { name: "HipHop", color: "#FF5722" },
//     { name: "RnB", color: "#2196F3" },
//     { name: "Afrobeat", color: "#4CAF50" },
//     { name: "Gospel", color: "#FFEB3B" },
//     { name: "Pop", color: "#9C27B0" },
//     { name: "Rock", color: "#795548" },
//     { name: "Jazz", color: "#607D8B" },
//     { name: "Classical", color: "#F44336" },
//     { name: "Country", color: "#FF9800" },
//   ];

//   return (
//     <div className="genre-selector">
//       {genres.map((genre) => (
//         <GenreCard key={genre.name} genre={genre} setGenre={setGenre} />
//       ))}
//     </div>
//   );
// }

// function GenreCard({ genre, setGenre }) {
//   const { name, color } = genre;

//   const handleClick = () => {
//     setGenre(name);
//   };

//   return (
//     <div
//       className="genre-card"
//       style={{ backgroundColor: color }}
//       onClick={handleClick}
//     >
//       {name}
//     </div>
//   );
// }

// function BackToSearchButton({ handleBackToSearch }) {
//   return (
//     <div className="back-to-search-container">
//       <button className="back-to-search-button" onClick={handleBackToSearch}>
//         Back to Search
//       </button>
//     </div>
//   );
// }

// function MusicList({ music, handleAddToPlaylist, playlists }) {
//   return (
//     <div className="music-list">
//       <h2>Artists</h2>
//       <div className="artist-list">
//         <ul className="artist-ul">
//           {music.artists.map((item) => (
//             <Artist key={item.data.uri} item={item.data} />
//           ))}
//         </ul>
//       </div>
//       <h2>Songs</h2>
//       <ul className="track-ul">
//         {music.tracks.map((item) => (
//           <Track
//             key={item.data.uri}
//             item={item.data}
//             handleAddToPlaylist={handleAddToPlaylist}
//             playlists={playlists}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Artist({ item }) {
//   const artistName = item?.profile?.name;
//   const avatarImage = item?.visuals?.avatarImage?.sources?.[0]?.url;

//   return (
//     <section className="artist-section">
//       <div className="artist-card">
//         <div className="artist-details">
//           <img
//             src={avatarImage}
//             alt={`${artistName} avatar`}
//             className="artist-avatar"
//           />
//           <div className="artist-info">
//             <strong>{artistName || "Unknown Artist"}</strong>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Track({ item, handleAddToPlaylist }) {
//   const trackName = item?.name;
//   const albumName = item?.albumOfTrack?.name;
//   const artistNames = item?.artists?.items
//     ?.map((artist) => artist?.profile?.name)
//     .join(", ");
//   const albumCover = item?.albumOfTrack?.coverArt?.sources?.[0]?.url;

//   return (
//     <div className="track-list">
//       <li>
//         <img
//           src={albumCover}
//           alt={`${albumName} cover`}
//           width="64"
//           height="64"
//         />
//         <div className="track-details">
//           <strong>{trackName || "Unknown Track"}</strong> by{" "}
//           {artistNames || "Unknown Artist"}
//           <p className="album">Album: {albumName || "Unknown Album"}</p>
//         </div>
//         <FaPlus
//           onClick={() => handleAddToPlaylist(item)}
//           className="add-button"
//         />
//       </li>
//     </div>
//   );
// }

// export default MusicPage;
