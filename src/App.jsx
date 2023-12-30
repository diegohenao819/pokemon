import AppRouter from "./AppRouter";
import "./app.css";

import PokemonProvider from "./context/PokemonProvider";

function App() {
  return (
    <>
    
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </>
  );
}

export default App;
