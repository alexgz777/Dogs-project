import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchDog, resetFilters } from "../redux/actions";
import "../styles/SearchBar.css";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDog(name));
    setCurrentPage(1);
  };
  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Buscar una raza de perros.."
        className="input__search"
        type="text"
      />
      <button className="button__search" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
