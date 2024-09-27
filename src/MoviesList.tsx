import MovieItem from "./MovieItem";
import movies from "./data/popular.json";

import { MoviesProps } from "./types/movies";

export default function MoviesList() {
  const moviesItems = movies.map((movie: MoviesProps) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <div className="movies-list">{moviesItems}</div>;
}
