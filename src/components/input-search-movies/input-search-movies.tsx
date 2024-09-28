import "./styles.css";

interface InputSearchMoviesProps {
  filterMovies: string;
  setFilterMovies: (value: string) => void;
  isInputSearchOpen: boolean;
  isSmallScreen: boolean;
}

export function InputSearchMovies({
  filterMovies,
  setFilterMovies,
  isInputSearchOpen,
  isSmallScreen,
}: InputSearchMoviesProps) {
  return (
    <input
      type="text"
      className={`input ${
        isSmallScreen ? (isInputSearchOpen ? "open" : "closed") : "open"
      }`}
      value={filterMovies}
      placeholder="Busque pelo nome do filme..."
      onChange={(e) => setFilterMovies(e.target.value)}
    />
  );
}
