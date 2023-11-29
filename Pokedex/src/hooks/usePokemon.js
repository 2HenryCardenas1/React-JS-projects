import {useContext} from "react";
import {PokemonContext} from "../context/PokemonContext";

export const usePokemon = () => useContext(PokemonContext);
