import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import Loader from "../components/Loader";
import "../assets/css/PokemonPage.css";

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
          <div className="PokemonPageContainer">
            <div className="spanId">
              <span className="PokemonId">#{pokemon.id}</span>
            </div>

            {/* CONTAINER PRINCIPAL */}
            <div className="main-info">
              {/* Name & Type*/}
              <div className="container-info-pokemon">
                <h1>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>
                <div className="type">
                  {pokemon.types.map((type) => (
                    <span
                      key={pokemon.id}
                      className={`button-type ${type.type.name}`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Peso & Altura */}
              <div className="group-info">
                <div className="altura">
                  <p className="height">Height</p>
                  <p className="dato">{pokemon.height} feet</p>
                </div>
                <div className="peso">
                  <p className="weight">Weight</p>
                  <p className="dato">{pokemon.weight} kg</p>
                </div>
              </div>
              {/* Image */}
              <div className="picture">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              </div>
            </div>
         

          {/* CONTAINER OF STATS */}
          <div className="container-stats">
            <h1>STATS</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hit Points</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                      
                      width: `${pokemon.stats[0].base_stat}%`
                    }}
                  >
                    {pokemon.stats[0].base_stat}
                  </span>
                </div>
              </div>

              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                     
                      width: `${pokemon.stats[1].base_stat}%`,
                    }}
                  >
                    {pokemon.stats[1].base_stat}
                  </span>
                </div>
              </div>

              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                      
                      width: `${pokemon.stats[2].base_stat}%`,
                    }}
                  >
                    {pokemon.stats[2].base_stat}
                  </span>
                </div>
              </div>

              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                      
                      width: `${pokemon.stats[3].base_stat}%`,
                    }}
                  >
                    {pokemon.stats[3].base_stat}
                  </span>
                </div>
              </div>

              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                     
                      width: `${pokemon.stats[4].base_stat}%`,
                    }}
                  >
                    {pokemon.stats[4].base_stat}
                  </span>
                </div>
              </div>

              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar">
                  <span
                    className="counter-stat"
                    style={{
                     
                      width: `${pokemon.stats[5].base_stat}%`,
                    }}
                  >
                    {pokemon.stats[5].base_stat}
                  </span>
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
