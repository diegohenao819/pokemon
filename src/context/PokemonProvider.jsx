import PropTypes from "prop-types";
import { PokemonContext } from "./PokemonContext";
import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);


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
        const baseUrl = "https://pokeapi.co/api/v2/";

        const res = await fetch(`${baseUrl}pokemon?limit=1000&offset=0`);
        const data = await res.json();

        console.log(data)


        const resultados = data.results.map(async (pokemon)=>{
                const res = await fetch(pokemon.url)
                const data = await res.json()
        })
        const final = await Promise.all(resultados)
        setGlobalPokemons(final)
        console.log(globalPokemons)
        setLoading(false)
    }


// Call Pokemons by Id
const getPokemonById = async (id) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
  };



  useEffect(() => {
    getAllPokemons();
  },[offset]);



  // useEffect(() =>{
  //   getGlobalPokemons()
  // }, [])


  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById
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
