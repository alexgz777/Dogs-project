import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterTemperament,
  filterCreated,
  orderAlpha,
  orderWeight,
} from "../redux/actions";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.dogs);
  const temperament = useSelector((state) => state.temperament);

  const [Order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = dogs.slice(firstItem, lastItem);

  let pageNumber = [];
  let numberPages = Math.ceil(dogs.length / itemsPerPage);
  for (let index = 0; index < numberPages; index++) {
    pageNumber.push(index + 1);
  }

  const page = (pages) => {
    setCurrentPage(pages);
  };
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const FilterTemperament = (e) => {
    dispatch(filterTemperament(e.target.value));
  };
  const FilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };
  const OrderAlpha = (e) => {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };
  const OrderWeight = (e) => {
    e.preventDefault();
    dispatch(orderWeight(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };
  return (
    <>
      <div className="home__filters">
        <div className="home__filterSearch">
          <div className="home_filter">
            <>
              <label>Filtrar por Temperamento:</label>
              <select onChange={(e) => FilterTemperament(e)}>
                <option value="Filtrar">Sin filtros</option>
                {temperament?.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </>
            <br />
            <>
              <label>Filtrar existentes/creados:</label>
              <select onChange={(e) => FilterCreated(e)}>
                <option value="Filtrar">Sin filtros</option>
                <option value="Existentes">Existentes</option>
                <option value="Posteados">Posteados</option>
              </select>
            </>
            <br />
            <>
              <label>Ordenar alfabeticamente:</label>
              <select onChange={(e) => OrderAlpha(e)}>
                <option value="Filtrar">Sin filtros</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </>
            <br />
            <>
              <label>Ordear por Peso:</label>
              <select onChange={(e) => OrderWeight(e)}>
                <option value="Filtrar">Sin filtros</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </>
          </div>
          <SearchBar className="home__searchbar" />
        </div>
        <>
          <ul className="home__pages">
            <button
              onClick={() => page(currentPage - 1)}
              className="button__number"
              key={currentPage - 1}
            >
              {"<"}
            </button>
            {pageNumber?.map((number) => {
              return (
                <button
                  onClick={() => page(number)}
                  className="button__number"
                  key={number}
                >
                  {number}
                </button>
              );
            })}
            <button
              onClick={() => page(currentPage + 1)}
              className="button__number"
              key={currentPage + 1}
            >
              {">"}
            </button>
          </ul>
        </>
      </div>
      <div className="home__text">
        <h2 className="home__title">
          Aquí puedes ver todas la razas de perros y su principales
          caracteristicas
        </h2>
        <h2 className="home__sub">Clickeá para ver mas info</h2>
      </div>
      <div className="home__dogs">
        {currentItems?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              image={e.image.url}
              name={e.name}
              temperament={e.temperament}
              weight={e.weight.metric}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
