import {BrowserRouter, useRoutes} from "react-router-dom";
import PokemonProvider from "../../context/PokemonContext";
import DetailsPokemon from "../Details/DetailsPokemon";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "/favorites", element: <Favorites />},
    {path: "/pokemon/:id", element: <DetailsPokemon />},
  ]);

  return routes;
};

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
