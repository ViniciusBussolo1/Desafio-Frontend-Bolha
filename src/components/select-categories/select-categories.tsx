import genres from "../../data/genres.json";
import { genresProps } from "../../types/genres";

import "./styles.css";

interface SelectGenreProps {
  filterGenre: string;
  setFilterGenre: (value: string) => void;
}

export function SelectCategories({
  filterGenre,
  setFilterGenre,
}: SelectGenreProps) {
  return (
    <select
      className="select"
      value={filterGenre}
      onChange={(e) => setFilterGenre(e.target.value)}
    >
      <option value="">Categoria</option>
      {genres.map((genre: genresProps) => (
        <option key={genre.id} value={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
