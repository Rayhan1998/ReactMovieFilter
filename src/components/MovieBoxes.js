import React from "react";

export default function MovieBoxes({ id, movie }) {
  return (
    <div className="card">
      <h1>{movie.original_title}</h1>
    </div>
  );
}
