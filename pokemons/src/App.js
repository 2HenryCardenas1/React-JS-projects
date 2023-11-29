import {Col} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import {getPokemonsDetails} from "./actions";
import {getPokemon} from "./api/pokemons";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import logo from "./statics/pokemon-logo.png";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemon();
      dispatch(getPokemonsDetails(pokemons));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col
        span={8}
        offset={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" width={250} />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
