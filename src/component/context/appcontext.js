import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("App context must be within App context provider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [mount, setMount] = useState();

  const mountPath = (key) => {
    setMount(key);
  };

  const addToFavourites = (book) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
  };
  const removeFromFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !== id);
    setFavourites(newFavourites);
  };

  return (
    <AppContext.Provider
      value={{
        mount,
        mountPath,
        favourites,
        addToFavourites,
        removeFromFavourites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
