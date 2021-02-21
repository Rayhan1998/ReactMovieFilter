import React from "react";
import MovieBoxes from "./MovieBoxes";
import "../components/styles.css";

export default function MovieBody({
  movies,
  addToWatchlist,
  watchlist,
  removeFromWatchlist
}) {
  return (
    <div className="movie-body">
      {movies.map(movie => {
        return (
          <MovieBoxes
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            image={movie.poster_path}
            movie={movie}
            addToWatchlist={addToWatchlist}
            watchlist={watchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        );
      })}
    </div>
  );
}
