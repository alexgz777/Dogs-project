import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <Link to={`/home/${id}`} className="card" key={id}>
      <img src={image} alt="breedImage" className="breedImage" />
      <h2 className="title">{`${name}`}</h2>
      <h3 className="subtitle">{`Temperamentos: ${temperament}`}</h3>
      <h3 className="subtitle">{`Peso: ${weight} kg`}</h3>
    </Link>
  );
};
export default Card;
