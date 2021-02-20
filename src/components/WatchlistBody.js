import React, { useState } from "react";
import MovieBoxes from "./MovieBoxes";
import "../components/styles.css";

export default function WatchlistBody({ watchlist }) {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(true);
  return (
    <div className={isWatchlistOpen ? "watchlist-open" : "watchlist-closed"}>
      <div className="inner-cards"></div>
      <button
        class="closeWatchlist button is-primary"
        onClick={() => setIsWatchlistOpen(!isWatchlistOpen)}
      >
        {isWatchlistOpen ? "close" : "open"}
      </button>
    </div>
  );
}

// {
//     movies.map(movie => {
//         return (
//             <MovieBoxes
//             key={movie.id}
//             id={movie.id}
//             movie={movie}
//             addToWatchlist={addToWatchlist}
//             watchlist={watchlist}
//             removeFromWatchlist={removeFromWatchlist}
//             />
//         );
//     })
// }
