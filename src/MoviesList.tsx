import MovieItem from "./MovieItem";
import movies from "./data/popular.json";
import { MoviesProps } from "./types/movies";

interface MoviesListProps {
  filterMovies: string;
}

export default function MoviesList({ filterMovies }: MoviesListProps) {
  const filteredMovies = movies.filter((movie: MoviesProps) => {
    return movie.title.toLowerCase().includes(filterMovies.toLowerCase());
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
