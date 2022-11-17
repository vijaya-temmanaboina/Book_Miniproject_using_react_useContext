import React, { useState, useEffect } from "react";
import { API_URL } from "./component/API";
import axios from "axios";

function Maincomp() {
  const [books, setBooks] = useState([]);
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
    <div>
      <div className="mainComp">
        {books.map((book) => (
          <div key={book.id}>
            <div>
              <h2>{book.title}</h2>
            </div>
            <div>
              <img src={book.image_url} />
            </div>
            <div>
              <button>Add to Favourites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maincomp;
