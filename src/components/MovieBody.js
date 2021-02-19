import React from "react";
import MovieBoxes from "./MovieBoxes";
import "../components/styles.css";

export default function MovieBody({ movies }) {
  return (
    <div className="movie-body">
      {movies.map(movie => {
        return <MovieBoxes key={movie.id} id={movie.id} movie={movie} />;
      })}
    </div>
  );
}