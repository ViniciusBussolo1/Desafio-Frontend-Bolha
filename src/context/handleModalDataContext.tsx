import { createContext, ReactNode, useState } from "react";

interface HandleModalDataContextProps {
  movieId: number;
  handleModalData: (id: number) => void;
}

interface HandleModalDataContextProvidersProps {
  children: ReactNode;
}

export const handleModalDataContext = createContext(
  {} as HandleModalDataContextProps
);

export function HandleCoinsContextProvider({
  children,
}: HandleModalDataContextProvidersProps) {
  const [movieId, setMovieId] = useState(0);

  const handleModalData = (id: number) => {
    setMovieId(id);
  };

  return (
    <handleModalDataContext.Provider
      value={{
        handleModalData,
        movieId,
      }}
    >
      {children}
    </handleModalDataContext.Provider>
  );
}
