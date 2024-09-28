"use client";

import { useEffect, useState } from "react";

import MoviesList from "./MoviesList";
import * as Switch from "@radix-ui/react-switch";

import { InputSearchMovies } from "./components/input-search-movies/input-search-movies";
import { SelectCategories } from "./components/select-categories/select-categories";

import { Modal } from "./components/modal/modal";

import { AlignJustify } from "lucide-react";

import "./styles.css";

export default function App() {
  const [filterMovies, setFilterMovies] = useState("");
  const [filterGenre, setFilterGenre] = useState("categoria");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeatured, setFeatured] = useState(false);
  const [isInputSearchOpen, setIsInputSearchOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    checkScreenSize(); // Verifica no primeiro render
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="App">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="container">
        <div className="search">
          <InputSearchMovies
            filterMovies={filterMovies}
            setFilterMovies={setFilterMovies}
            isInputSearchOpen={isInputSearchOpen}
            isSmallScreen={isSmallScreen}
          />

          <div className="container__div">
            <AlignJustify
              className="icon-align"
              size={28}
              onClick={() => setIsInputSearchOpen(!isInputSearchOpen)}
            />

            <div className="search-categories">
              <label
                className="Label"
                htmlFor="feature-mode"
                style={{ paddingRight: 5 }}
              >
                Destaques
              </label>
              <Switch.Root
                className="SwitchRoot"
                id="feature-mode"
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
