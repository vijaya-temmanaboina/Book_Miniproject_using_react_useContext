import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import BookDetails from "./component/bookDetails";
import Footer from "./component/footer";
import Maincomp from "./component/maincomponent";
import Favourites from "./component/favourites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route
          path="/books/:id"
          element={<BookDetails path={"/books/:id"} />}
        />
        <Route
          path="/favourites"
          element={<Favourites path={"/favourites"} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
