import { MoviesProps } from "./types/movies";

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

interface MovieItemProps {
  movie: MoviesProps;
  onClick: () => void;
}

export default function MovieItem({ movie, onClick }: MovieItemProps) {
  return (
    <div className="movie-item" onClick={onClick}>
      <header className="movie-item-header">
        <img
          className="movie-item__poster"
          src={assetsUrl + movie.poster_path}
          alt=""
          draggable={false}
        />
        {movie.featured && (
          <span className="movie-item__badge">Em destaque</span>
        )}
      </header>
      <h4 className="movie-item__title">{movie.title}</h4>
    </div>
  );
}
