import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";
import "./PokemonList.css";
import Loader from "./Loader";

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="PokemonList">

          {
            filteredPokemons.length ? (
           <>
               {filteredPokemons.map((pokemon) => (
                 <CardPokemon key={pokemon.id} pokemon={pokemon} />
               ))}
           </>
            ): (
           <>
               {allPokemons.map((pokemon) => (
                 <CardPokemon key={pokemon.id} pokemon={pokemon} />
               ))}
           </>
            )
          }


       
        </div>
      
      )}
    </>
  );
};

export default PokemonList;
