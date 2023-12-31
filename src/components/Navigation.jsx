import { useContext } from "react";
import {Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    console.log(valueSearch)
    e.preventDefault();
    navigate("/search", { 
      state: valueSearch 
    });
    onResetForm();
  }

  return (
    <div>
      <h1>Navigation</h1>

      <form onSubmit={onSearchSubmit}>
        <input
          type="search"
          name="valueSearch"
          id=""
          placeholder="Search your Pokemon"
          value={valueSearch}
          onChange={onInputChange}
        />

        <button type="submit">Search</button>
      </form>

      <Outlet />
    </div>
  );
};

export default Navigation;
