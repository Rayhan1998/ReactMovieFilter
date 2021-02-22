import "./App.css";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import MovieBody from "./components/MovieBody";
import WatchlistBody from "./components/WatchlistBody";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movie) {
    setWatchlist(watchlist => [...watchlist, movie]);
    saveMovies(watchlist);
  }

  function removeFromWatchlist(id) {
    let UpdatedWatchlist = watchlist.filter(movie => {
      return movie.id != id;
    });

    setWatchlist(UpdatedWatchlist);
    saveMovies(watchlist);
  }

  function saveMovies(watchlist) {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  function UpdateWatchlistFromStorage() {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")));
  }

  useEffect(() => {
    if (localStorage.getItem("watchlist") === null) {
      saveMovies(watchlist);
      UpdateWatchlistFromStorage();
    } else {
      UpdateWatchlistFromStorage();
    }
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <h1>Movie Finder</h1>
        </div>

        <ul className="list">
          <li className="list-item">
            <a href="#" className="list-link">
              My Watchlist
            </a>
          </li>
          <li className="list-item">
            <a href="#" className="list-link">
              Home
            </a>
          </li>
        </ul>
      </nav>
      <h1>Filter for Movies</h1>
      <Filter setMovies={setMovies} />
      <MovieBody
        movies={movies}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        watchlist={watchlist}
        saveMovies={saveMovies}
      />
      <WatchlistBody
        movies={watchlist}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        watchlist={watchlist}
        saveMovies={saveMovies}
      />
    </div>
  );
}

export default App;
