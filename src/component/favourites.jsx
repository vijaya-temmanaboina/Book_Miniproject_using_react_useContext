import React, { useEffect } from "react";
import { useAppContext } from "./context/appcontext";
// import { usePathComponent } from "./context/pathContext";

const Favourites = () => {
  const {
    mountPath,
    favourites,
    addToFavourites,
    removeFromFavourites
  } = useAppContext();
  // const {  } = usePathComponent();
  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };
  useEffect(() => {
    mountPath("favourites");
    return () => mountPath("mainComponent");
  }, []);
  return (
    <div className="favour">
      {favourites.length > 0 ? (
        favourites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} />
            </div>
            <div>
              {favouritesChecker(book.id) ? (
                <button onClick={() => removeFromFavourites(book.id)}>
                  Remove from favourites
                </button>
              ) : (
                <button onClick={() => addToFavourites(book)}>
                  ADD to favourites:
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>NO FAVOURITES!!!!!</h1>
      )}
    </div>
  );
};

export default Favourites;
