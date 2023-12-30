import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import Loader from "../components/Loader";

const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);

  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <span>#{pokemon.id}</span>

            <div>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1>{(pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1)}</h1>
              <div>
                {pokemon.types.map((type) => (
                  <span key={pokemon.id}>{type.type.name}</span>
                ))}
              </div>

              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{pokemon.height}</span>
                </div>

                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight} kg</span>
                </div>
              </div>



              <div className="container-stats">
                  <h1>Stats</h1>
                  <div className="stats">
                   <div className="stat-group">
                     <span>hp</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[0].base_stat} </span>
                   </div>

                   <div className="stat-group">
                     <span>Attack</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[1].base_stat} </span>
                   </div>

                   <div className="stat-group">
                     <span>Defense</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[2].base_stat} </span>
                   </div>

                   <div className="stat-group">
                     <span>Special Attack</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[3].base_stat} </span>
                   </div>

                   <div className="stat-group">
                     <span>Special Defense</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[4].base_stat} </span>
                   </div>

                   
                   <div className="stat-group">
                     <span>Speed</span>
                     <div className="progress-bar"> . </div>
                     <span className="counter-stat"> {pokemon.stats[5].base_stat} </span>
                   </div>
                 
                 
                 
                 
                 
                 
                  </div>
                  
              </div>




            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
