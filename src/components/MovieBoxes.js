import React from "react";

export default function MovieBoxes({ id, movie, addToWatchlist, watchlist }) {
  const imageTemplate = "https://image.tmdb.org/t/p/w300";

  function movieHandler() {
    const movieInfo = {
      id: id,
      title: movie.original_title,
      image: movie.poster_path
    };
    addToWatchlist(movieInfo);
  }

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
      <button
        className="button is-primary card-btn"
        onClick={() => console.log(id)}
      >
        more info
      </button>
      <button className="button is-primary  card-btn" onClick={movieHandler}>
        add to watchlist
      </button>
    </div>
  );
}
