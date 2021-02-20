import React from "react";

export default function MovieBoxes({ id, movie }) {
  const imageTemplate = "https://image.tmdb.org/t/p/w300";
  return (
    <div className="card">
      <img
        className="image"
        src={`${imageTemplate}${movie.poster_path}`}
        alt="movie-image"
      />
      <h1 style={{ paddingTop: "10px", textAlign: "center" }}>
        {movie.original_title}
      </h1>
      <button className="button is-primary card-btn">more info</button>
      <button className="button is-primary  card-btn">add to watchlist</button>
    </div>
  );
}
