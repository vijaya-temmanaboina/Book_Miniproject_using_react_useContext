import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { usePathComponent } from "./context/pathContext";

import { useAppContext } from "./context/appcontext";

const Navbar = () => {
  const {
    mountPath,
    mount,
    favourites,
    addToFavourites,
    removeFromFavourites
  } = useAppContext();
  // const {  } = usePathComponent();
  return (
    <div className="navbar">
      {mount === "favourites" && (
        <Link to="/">
          <img
            className="image1"
            src={
              "https://img.freepik.com/free-icon/back-navigational-arrow-button-pointing-left_318-48409.jpg?w=2000"
            }
          />
        </Link>
      )}
      <Link to="/">
        <h1>Books App</h1>
      </Link>
      <div>
        <Link to="/favourites">
          <h3>Your Favourites:{favourites.length}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
