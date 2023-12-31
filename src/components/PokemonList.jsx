
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import CardPokemon from "./CardPokemon"
import './PokemonList.css'
import Loader from './Loader'

const PokemonList = () => {

  const {allPokemons, loading} = useContext(PokemonContext)
  return (
    <>
    {
      loading ? (
      
      <Loader /> 
      
      ) : (

        <div className='PokemonList'>
        {allPokemons.map((pokemon) => <CardPokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
      )
    }


   
    </>
  )
}

export default PokemonList