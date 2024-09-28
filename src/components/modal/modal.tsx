import { useContext } from "react";
import { handleModalDataContext } from "../../context/handleModalDataContext";

import movies from "../../data/popular.json";
import genres from "../../data/genres.json";

import { MoviesProps } from "../../types/movies";
import { genresProps } from "../../types/genres";

import { X } from "lucide-react";

import "./style.css";

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export function Modal({ isModalOpen, setIsModalOpen }: ModalProps) {
  const { movieId } = useContext(handleModalDataContext);

  const filteredMovies = movies.filter((movie: MoviesProps) => {
    return movie.id === movieId;
  });

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <X
              className="x"
              onClick={() => setIsModalOpen(!isModalOpen)}
              size={32}
              aria-label="Fechar"
            />
            {filteredMovies.map((movie: MoviesProps) => (
              <div key={movie.id} className="content">
                <img
                  className="movie-item__poster"
                  src={assetsUrl + movie.poster_path}
                  alt=""
                  draggable={false}
                />
                <div className="informations">
                  <h1 className="informations__title">{movie.title}</h1>

                  <div>
                    <p className="informations__title__date">
                      Data de lançamento
                    </p>
                    <p className="informations__date">
                      {movie.release_date.toString()}
                    </p>
                  </div>

                  <div>
                    <p className="informations__title__date">Categoria</p>
                    <p className="informations__date">
                      {movie.genre_ids
                        .map((genreId: number) => {
                          const genre = genres.find(
                            (genre: genresProps) => genre.id === genreId
                          );
                          return genre
                            ? genre.name
                            : "Categoria não encontrada";
                        })
                        .join(", ")}
                    </p>
                  </div>

                  <div>
                    <p className="informations__title__date">Visualizações</p>
                    <p className="informations__date">{movie.popularity}</p>
                  </div>

                  <p className="informations__overview">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
