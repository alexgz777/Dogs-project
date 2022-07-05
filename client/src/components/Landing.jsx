import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
const logo = require("../assets/logodog.jpg");

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__text">
        <h1>¡Amamos a los perros igual que vos!</h1>
        <h2>Por eso te invitamos a que entres</h2>
        <h3>Informate, divertite y dejanos tu opinion</h3>
      </div>
      <Link to={"/home"}>
        <img src={logo} alt="logo" className="logoLanding" />
      </Link>
    </div>
  );
};

export default Landing;
