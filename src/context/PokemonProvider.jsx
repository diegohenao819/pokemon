import PropTypes from "prop-types";
import { PokemonContext } from "./PokemonContext";
import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

const PokemonProvider = ({ children }) => {

  console.log("PokemonProvider rendered");

  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [rerender, setRerender] = useState(false)


  // Usar custom Hooks useForm
  const {valueSearch, onInputChange, onResetForm} =useForm({
    valueSearch: "",
  })

  // Estados simples
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // Call the 50 first pokemons from the API
  const getAllPokemons = async (limit = 50) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const resultados = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(resultados);
    setAllPokemons(
      [...allPokemons,
      ...results
      ]

      );
    setLoading(false);
  };

  // Call all the pokemons from the API
  const getGlobalPokemons = async () => {
    try {
        const baseUrl = "https://pokeapi.co/api/v2/";

    
        const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
        const data = await res.json();

        // Fetch detailed data for each Pokemon
        const resultados = await Promise.all(data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        }));

        // Update global state
        setGlobalPokemons(resultados);

        // Additional logic (if any)
        setLoading(false);
    } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
        // Handle the error appropriately
    }
};



// Call Pokemons by Id
const getPokemonById = async (id) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
  };



  useEffect(() => {
    console.log("All Pokemons useEffect");
    getAllPokemons();

  }, [offset]);


  useEffect(() => {
    console.log("Global Pokemons");
  
    getGlobalPokemons()
  }, []);


  const loadMore = () => {

    console.log("onClickLoadMore");
    setOffset(offset + 50);
   
  }




  


  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById,
        loading,
        active,
        setActive,
        setLoading,
        loadMore,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokemonProvider;
