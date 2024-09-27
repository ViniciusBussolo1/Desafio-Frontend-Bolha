"use client";

import { useState } from "react";
import MoviesList from "./MoviesList";
import "./styles.css";
import { InputSearchMovies } from "./components/input-search-movies/input-search-movies";

export default function App() {
  const [filterMovies, setFilterMovies] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <InputSearchMovies
            filterMovies={filterMovies}
            setFilterMovies={setFilterMovies}
          />
        </div>

        <MoviesList filterMovies={filterMovies}></MoviesList>
      </div>
    </div>
  );
}
