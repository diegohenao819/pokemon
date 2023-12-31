import { Link } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./app.css";

import PokemonProvider from "./context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
 
      <Link to={"/"}>
          <button>Home</button>
        </Link>
        <AppRouter />
      </PokemonProvider>
    </>
  );
}

export default App;
