import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <img alt="logo" className="logo" />
        <Link to="/" className="button__navbar">
          Inicio
        </Link>
        <Link to="/home" className="button__navbar">
          Razas
        </Link>
        <Link to="/home/post" className="button__navbar">
          Postear Raza
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
