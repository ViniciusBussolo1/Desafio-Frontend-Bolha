import MovieItem from "./MovieItem";
import { MoviesProps } from "./types/movies";

import movies from "./data/popular.json";
import genres from "./data/genres.json";

import { genresProps } from "./types/genres";
import { useContext } from "react";
import { handleModalDataContext } from "./context/handleModalDataContext";

interface MoviesListProps {
  filterMovies: string;
  filterGenre: string;
  isFeatured: boolean;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export default function MoviesList({
  filterMovies,
  filterGenre,
  isFeatured,
  isModalOpen,
  setIsModalOpen,
}: MoviesListProps) {
  const { handleModalData } = useContext(handleModalDataContext);
  const handleModalOpen = (id: number) => {
    setIsModalOpen(!isModalOpen);

    handleModalData(id);
  };

  const filteredGenres = genres.find((genre: genresProps) => {
    return genre.name.toLowerCase().includes(filterGenre.toLowerCase());
  });

  const filteredMovies = movies.filter((movie: MoviesProps) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filterMovies.toLowerCase());
    const matchesGenre = filteredGenres
      ? movie.genre_ids.indexOf(filteredGenres.id) !== -1
      : true;
    const matchesFeatured = isFeatured ? movie.featured === true : true;

    return matchesTitle && matchesGenre && matchesFeatured;
  });

  const moviesItems = filteredMovies.map((movie: MoviesProps) => (
    <MovieItem
      key={movie.id}
      movie={movie}
      onClick={() => handleModalOpen(movie.id)}
    />
  ));

  return (
    <div className="movies-list">
      {moviesItems.length > 0 ? (
        moviesItems
      ) : (
        <span className="movies-list_span">Nenhum filme encontrado.</span>
      )}
    </div>
  );
}
