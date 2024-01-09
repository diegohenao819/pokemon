import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "../assets/css/FilterBar.css";


const FilterBar = () => {
  const { active, handleCheckBox } = useContext(PokemonContext);

  return (
    <div id="filter" className={` filter-bar ${active ? "active" : ""}`}>
       <div className="tipo-categoria">
        <h2>Filter by Type</h2>
       </div>
      <div className="container-filter">
       

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

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="dark"
            id="dark"
          />
          <label htmlFor="dark">Dark</label>
          </div>


        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragon</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Electric</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Fairy</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Fighting</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fire</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">Flying</label>
          </div>


          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="ghost"
            id="ghost"
          />
          <label htmlFor="ghost">Ghost</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">Ground</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="ice"
            id="ice"
          />
          <label htmlFor="ice">Ice</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Poison</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">Rock</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Steel</label>
          </div>

          <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="water"
            id="water"
          />
          <label htmlFor="water">Water</label>
          </div>



      </div>
    </div>
  );
};

export default FilterBar;
