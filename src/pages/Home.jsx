import  FilterBar  from "../components/FilterBar";
import  PokemonList  from "../components/PokemonList";

const Home = () => {
  return (
    <>
    <FilterBar />
      <div>
        <h1>HOME</h1>
        <div>
          <span>Filter</span>
        </div>
      </div>
      <PokemonList />
      
    </>
  );
};

export default Home;
