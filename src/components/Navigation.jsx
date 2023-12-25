import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { PokemonContext } from "../context/PokemonContext"


const Navigation = () => {

  const {name} = useContext(PokemonContext)
  console.log(name)

  return (
    <div>
        <h1>Navigation</h1>
        <Outlet />
    </div>
  )
}

export default Navigation