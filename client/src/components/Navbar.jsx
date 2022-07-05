import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const logo = require("../assets/logodog.jpg");

const Navbar = () => {
  return (
    <ul className="navbar">
      <div className="logoImage" >
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Link to="/" className="button__navbar">
        Inicio
      </Link>
      <Link to="/home" className="button__navbar">
        Ver Razas
      </Link>
      <Link to="/home/post" className="button__navbar">
        Postear
      </Link>
    </ul>
  );
};

export default Navbar;
