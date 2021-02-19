import "./App.css";
import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieBody from "./components/MovieBody";

function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  console.log(movies);
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
      <MovieBody movies={movies} />
    </div>
  );
}

export default App;
