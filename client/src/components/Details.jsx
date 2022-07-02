import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDogId } from "../redux/actions";
import "../styles/Details.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs[0]);

  useEffect(() => {
    dispatch(getDogId(id));
  }, [dispatch]);

  return (
    <div>
      {dogs ? (
        <>
          <img className="breedImage" alt="breedImage" src={dogs.image.url} />
          <h2 className="title">{`${dogs.name}`}</h2>
          <h3 className="subtitle">{`Temperamento: ${dogs.temperament}`}</h3>
          <h3 className="subtitle">{`Peso: ${dogs.weight.metric} kg`}</h3>
          <h3 className="subtitle">{`Altura: ${dogs.height.metric} cm`}</h3>
          <h3 className="subtitle">{`Años de vida: ${dogs.life_span}`}</h3>
        </>
      ) : (
        <p className="message__loading">Cargando...</p>
      )}
      <Link className="button__back" to="/home">
        <button>Volver al Inicio</button>
      </Link>
    </div>
  );
};

export default Details;
