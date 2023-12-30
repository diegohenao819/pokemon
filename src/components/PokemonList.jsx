
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import CardPokemon from "./CardPokemon"
import './PokemonList.css'

const PokemonList = () => {

  const {allPokemons} = useContext(PokemonContext)
  return (
    <>
    <div className='PokemonList'>
    {allPokemons.map((pokemon) => <CardPokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
    </>
  )
}

export default PokemonList