import React, { useState } from "react";
import MovieBoxes from "./MovieBoxes";

import "../components/styles.css";

export default function WatchlistBody({
  movies,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
  saveMovies
}) {
  console.log(watchlist);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  return (
    <div className={isWatchlistOpen ? "watchlist-open" : "watchlist-closed"}>
      <div
        className={isWatchlistOpen ? "inner-cards-open" : "inner-cards-closed"}
      >
        {movies.map(movie => {
          return (
            <MovieBoxes
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              addToWatchlist={addToWatchlist}
              watchlist={movies}
              removeFromWatchlist={removeFromWatchlist}
              saveMovies={saveMovies}
            />
          );
        })}
      </div>
      <button
        className="closeWatchlist button is-primary"
        onClick={() => setIsWatchlistOpen(!isWatchlistOpen)}
      >
        {isWatchlistOpen ? "close" : "open"}
      </button>
    </div>
  );
}
