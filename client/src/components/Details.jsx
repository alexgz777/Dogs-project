import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDogId, resetFilters } from "../redux/actions";
import "../styles/Details.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.details[0]);

  useEffect(() => {
    dispatch(getDogId(id));
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="details">
      {dogs ? (
        <div className="detail">
          <img
            className="breedImageDetails"
            alt="breedImage"
            src={dogs.image.url}
          />
          <h2 className="title">{`${dogs.name}`}</h2>
          <h3 className="subtitleTemp">{`Temperamento: ${dogs.temperament}`}</h3>
          <h3 className="subtitle">{`Peso: ${dogs.weight.metric} kg`}</h3>
          <h3 className="subtitle">{`Altura: ${dogs.height.metric} cm`}</h3>
          <h3 className="subtitle">{`Años de vida: ${dogs.life_span}`}</h3>
        </div>
      ) : (
        <p className="message__loading">Cargando...</p>
      )}
      <Link className="button__back" to="/home">
        Volver
      </Link>
    </div>
  );
};

export default Details;
