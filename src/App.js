import "./App.css";
import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieBody from "./components/MovieBody";
import WatchlistBody from "./components/WatchlistBody";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movie) {
    setWatchlist(watchlist => [...watchlist, movie]);
  }

  function removeFromWatchlist(id) {
    let UpdatedWatchlist = watchlist.filter(movie => {
      return movie.id != id;
    });

    setWatchlist(UpdatedWatchlist);
  }

  console.log(watchlist);

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
      />
      <WatchlistBody />
    </div>
  );
}

export default App;
