import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"


const FilterBar = () => {

  const {active, handleCheckBox} = useContext(PokemonContext)



  return (
    <div className={`container-filter ${active ? "active" : ""}`}>
      <div>
        <span>Type</span>

        <div className="group-type">
          <input 
          type="checkbox"
          onChange={handleCheckBox}
          name="grass"
          id="grass"
          />
          <label htmlFor="grass">Grass</label>
          
        </div>

        <div className="group-type">
          <input 
          type="checkbox"
          onChange={handleCheckBox}
          name="bug"
          id="bug"
          />
          <label htmlFor="bug">Bug</label>
          
        </div>
      </div>
    </div>
  )
}

export default FilterBar