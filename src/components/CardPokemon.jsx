import { Link } from "react-router-dom"
import "./cardPokemon.css"

const CardPokemon = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="CardPokemon">
      <div className="imagen">
        <img src={pokemon.sprites.other.dream_world.front_default} alt= {`pokemon ${pokemon.name} `} />
      </div>

      <div className="card-information">
        <span>N° {pokemon.id} </span>
        <h3>{pokemon.name}</h3>

        <div className="boton">
          {pokemon.types.map  ((type) => <span key={type.slot}  className={type.type.name }>{type.type.name}</span>)}
        </div>
      </div>
    </Link>


  )




}

export default CardPokemon