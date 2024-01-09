import { Link } from "react-router-dom";
import  FilterBar  from "../components/FilterBar";
import  PokemonList  from "../components/PokemonList";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Home = () => {

 const {loadMore, active, setActive}  = useContext(PokemonContext)



  return (
    <>
   
      <div>
        
     


        <div onClick={() => setActive(!active)}>
        <FilterBar />
         
        </div>



      </div>
      <PokemonList />
      
      <button onClick={loadMore}>Load more ...</button>
      
    </>
  );
};

export default Home;
