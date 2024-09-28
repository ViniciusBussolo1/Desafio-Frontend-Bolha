import MovieItem from "./MovieItem";
import { MoviesProps } from "./types/movies";

import movies from "./data/popular.json";
import genre from "./data/genres.json";
import { genresProps } from "./types/genres";

interface MoviesListProps {
  filterMovies: string;
  filterGenre: string;
}

export default function MoviesList({
  filterMovies,
  filterGenre,
}: MoviesListProps) {
  const filteredMovies = movies.filter((movie: MoviesProps) => {
    return movie.title.toLowerCase().includes(filterMovies.toLowerCase());
  });

  const filteredGenres = genre.find((genre: genresProps) => {
    return genre.name.toLowerCase().includes(filterGenre.toLowerCase());
  });

  const moviesItems = filteredMovies.map((movie: MoviesProps) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  const genresItems = filteredGenres
    ? movies
        .filter(
          (movie: MoviesProps) =>
            movie.genre_ids.indexOf(filteredGenres.id) !== -1
        )
        .map((movie: MoviesProps) => <MovieItem key={movie.id} movie={movie} />)
    : [];

  return (
    <div className="movies-list">
      {filterGenre && genresItems.length > 0 ? (
        genresItems
      ) : moviesItems.length > 0 ? (
        moviesItems
      ) : (
        <span className="movies-list_span">Nenhum filme encontrado.</span>
      )}
    </div>
  );
}
