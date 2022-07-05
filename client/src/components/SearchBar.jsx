import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDog } from "../redux/actions";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDog(name));
    setName("");
  };
  return (
    <div className="searchbar">
      <input
        onClick={(e) => handleInput(e)}
        placeholder="Buscar una raza de perros.."
        className="input__search"
        type="text"
      />
      <button
        onClick={(e) => handleSearch(e)}
        className="button__search"
        type="submit"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
