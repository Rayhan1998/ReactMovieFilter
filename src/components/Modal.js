import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Modal({ id }) {
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=966f018ec7b200f3f42a99bfade3fbdc&language=en-US`
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Modal">
      <div className="content">
        <h1 className="modal-title">Movie Title</h1>
        <h2 className="modal-info">movie description</h2>
      </div>
    </div>
  );
}
