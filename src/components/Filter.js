import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Filter({ setMovies }) {
  const [submit, setSubmit] = useState(false);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const genreEl = useRef(null);
  const yearEl = useRef(null);
  function formSubmit(e) {
    e.preventDefault();
    setGenre(genreEl.current.value);
    setYear(yearEl.current.value);

    // console.log(genre.current.value);
    // console.log(year.current.value);
  }

  useEffect(() => {
    if (genreEl.current.value != "Genre" && yearEl.current.value != "Year") {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=966f018ec7b200f3f42a99bfade3fbdc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${year}&with_genres=${genre}`
        )
        .then(res => {
          setMovies(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [genre, year]);
  return (
    <form className="form" onSubmit={formSubmit}>
      <div className="select is-primary">
        <select className="genre" ref={genreEl}>
          <option>Genre</option>
          <option value="28">Action</option>

          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">Tv Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
        </select>
      </div>
      <div className="select is-primary">
        <select className="year" ref={yearEl}>
          <option value="">Year</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
        </select>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  );
}
