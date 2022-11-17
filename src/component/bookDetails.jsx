import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS } from "./API";

import { useAppContext } from "./context/appcontext";
// import { usePathComponent } from "./context/pathContext";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { mountPath } = useAppContext();

  // const {  } = usePathComponent();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    mountPath("favourites");
    return () => {
      mountPath("maincomponent");
    };
  }, []);

  return (
    <>
      <h2 className="book-title">{book?.title}</h2>

      <div className="book_details">
        <div className="book-left-container">
          <img className="book-image" src={book?.image_url} />
          <p className="author">
            author:<b>{book?.authors}</b>
          </p>
        </div>
        <div className="book-poster">
          <h2 className="desc-title">Description</h2>
          <p className="description">{book?.description}</p>

          <h2 className="genre-title">Genres</h2>
          <p className="genre">{book?.genres}</p>
        </div>
      </div>
      <p className="quote">
        <i>{book?.Quote1}</i>
      </p>
    </>
  );
};

export default BookDetails;
