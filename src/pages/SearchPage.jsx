import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {  useLocation } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";
import Loader from "../components/Loader";

const SearchPage = () => {
  console.log("SearchPage Render")


  const location = useLocation();
  console.log(location);

  const {globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log("Estos son todos los pokemones" + filteredPokemons);

  return (

    <div>
       
    

      {filteredPokemons.length === 0 ? (
       <>
          
         <Loader />
       </>
      ) : (
    <>
       <p>
             Se encontraron <span>{filteredPokemons?.length} resultados: </span>
           </p> 
          <div className="PokemonList">
          
            {filteredPokemons.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
    </>
      )}
    </div>
  );
};

export default SearchPage;
