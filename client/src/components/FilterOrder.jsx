import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../redux/actions";

const FilterOrder = () => {
  const temperament = useSelector((state) => state.temperament);
  const dispatch = useDispatch();

  const [Order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const filterTemperament = (e) => {
    dispatch(filterTemperament(e.target.value));
  };
  const filterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };
  const OrderAlpha = (e) => {
    e.preventDefault();
    dispatch(OrderAlpha(e.target.value));

    setOrder(e.target.value);
  };
  const OrderWeight = (e) => {
    e.preventDefault();
    dispatch(OrderWeight(e.target.value));

    setOrder(e.target.value);
  };

  return (
    <div>
      <>
        <label>Filtrar por Temperamento:</label>
        <select onChange={(e) => filterTemperament(e)}>
          {temperament?.map((e) => {
            return <option value={e.name}>{e.name}</option>;
          })}
        </select>
      </>
      <>
        <label>Filtrar existentes/creados:</label>
        <select onChange={(e) => filterCreated(e)}>
          <option value="Existentes">Existentes</option>
          <option value="Posteados">Posteados</option>
        </select>
      </>
      <>
        <label>Ordenar alfabeticamente:</label>
        <select onChange={(e) => OrderAlpha(e)}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </>
      <>
        <label>Ordear por Peso:</label>
        <select onChange={(e) => OrderWeight(e)}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </>
    </div>
  );
};

export default FilterOrder;
