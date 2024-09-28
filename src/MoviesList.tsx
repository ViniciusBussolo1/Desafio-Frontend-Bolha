import MovieItem from "./MovieItem";
import { MoviesProps } from "./types/movies";

import movies from "./data/popular.json";
import genres from "./data/genres.json";

import { genresProps } from "./types/genres";

interface MoviesListProps {
  filterMovies: string;
  filterGenre: string;
}

export default function MoviesList({
  filterMovies,
  filterGenre,
}: MoviesListProps) {
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

    return matchesTitle && matchesGenre;
  });

  const moviesItems = filteredMovies.map((movie: MoviesProps) => (
    <MovieItem key={movie.id} movie={movie} />
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
