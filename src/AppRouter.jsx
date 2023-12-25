import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Navigation from "./components/Navigation";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemon/:id" element={<PokemonPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default AppRouter;
