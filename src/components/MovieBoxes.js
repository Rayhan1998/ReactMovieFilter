import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function MovieBoxes({
  id,
  movie,
  title,
  image,
  addToWatchlist,
  watchlist,
  removeFromWatchlist,
  saveMovies
}) {
  const imageTemplate = "https://image.tmdb.org/t/p/w300";
  const [isMoreInfoCLicked, setIsMoreInfoCLicke] = useState(false);

  function movieHandler() {
    const movieInfo = {
      id: id,
      title: title,
      image: image
    };

    if (watchlist.some(el => el.id == id)) {
      removeFromWatchlist(id);
    } else {
      addToWatchlist(movieInfo);
    }
  }

  useEffect(() => {
    saveMovies(watchlist);
  }, [watchlist]);

  return (
    <div className="card">
      <img
        className="image"
        src={`${imageTemplate}${image}`}
        alt="movie-image"
      />
      <h1 style={{ paddingTop: "10px", textAlign: "center" }}>{title}</h1>
      <button
        className="button is-primary card-btn"
        onClick={() => <h1>Hello</h1>}
      >
        more info
      </button>
      <button className="button is-primary  card-btn" onClick={movieHandler}>
        {watchlist.some(el => el.id == id) ? "remove from cart" : "add to cart"}
      </button>
    </div>
  );
}
