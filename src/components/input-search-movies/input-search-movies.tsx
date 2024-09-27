interface InputSearchMoviesProps {
  filterMovies: string;
  setFilterMovies: (value: string) => void;
}

export function InputSearchMovies({
  filterMovies,
  setFilterMovies,
}: InputSearchMoviesProps) {
  return (
    <input
      type="text"
      className="input"
      value={filterMovies}
      placeholder="Busque pelo nome do filme..."
      onChange={(e) => setFilterMovies(e.target.value)}
    />
  );
}
