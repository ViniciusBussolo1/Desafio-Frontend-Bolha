"use client";

import { useState } from "react";
import MoviesList from "./MoviesList";

import { InputSearchMovies } from "./components/input-search-movies/input-search-movies";
import { SelectCategories } from "./components/select-categories/select-categories";

import "./styles.css";

export default function App() {
  const [filterMovies, setFilterMovies] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <InputSearchMovies
            filterMovies={filterMovies}
            setFilterMovies={setFilterMovies}
          />

          <SelectCategories
            filterGenre={filterGenre}
            setFilterGenre={setFilterGenre}
          />
        </div>

        <MoviesList
          filterMovies={filterMovies}
          filterGenre={filterGenre}
        ></MoviesList>
      </div>
    </div>
  );
}
