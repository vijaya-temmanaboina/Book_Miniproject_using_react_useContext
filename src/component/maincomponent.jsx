import React, { useState, useEffect } from "react";
import { API_URL } from "./API";
import axios from "axios";
import { useAppContext } from "./context/appcontext";
import { useNavigate } from "react-router-dom";

const Maincomp = () => {
  const [books, setBooks] = useState([]);

  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
  const navigate = useNavigate();
  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainComp">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favouritesChecker(book.id) ? (
              <button onClick={() => removeFromFavourites(book.id)}>
                Remove from favourites
              </button>
            ) : (
              <button onClick={() => addToFavourites(book)}>
                ADD to favourites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Maincomp;
