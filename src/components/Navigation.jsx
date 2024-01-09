import { useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import {Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import "../assets/css/Navigation.css";

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
    <div className="navigation">
 <div className="encabezado" id="search">
       <HashLink smooth to='/#top'>
           <button>Home</button>
         </HashLink>
     <h3 className="pokemonList">POKEMON LIST</h3>
 </div>
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
