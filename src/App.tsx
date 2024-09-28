"use client";

import { useState } from "react";

import MoviesList from "./MoviesList";
import * as Switch from "@radix-ui/react-switch";

import { InputSearchMovies } from "./components/input-search-movies/input-search-movies";
import { SelectCategories } from "./components/select-categories/select-categories";

import { Modal } from "./components/modal/modal";

import "./styles.css";

export default function App() {
  const [filterMovies, setFilterMovies] = useState("");
  const [filterGenre, setFilterGenre] = useState("categoria");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeatured, setFeatured] = useState(false);

  return (
    <div className="App">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="container">
        <div className="search">
          <InputSearchMovies
            filterMovies={filterMovies}
            setFilterMovies={setFilterMovies}
          />

          <div className="search-categories">
            <Switch.Root
              className="SwitchRoot"
              id="airplane-mode"
              checked={isFeatured}
              onCheckedChange={() => setFeatured(!isFeatured)}
            >
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>

            <SelectCategories
              filterGenre={filterGenre}
              setFilterGenre={setFilterGenre}
            />
          </div>
        </div>

        <MoviesList
          filterMovies={filterMovies}
          filterGenre={filterGenre}
          isFeatured={isFeatured}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></MoviesList>
      </div>
    </div>
  );
}
