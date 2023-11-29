import {getPokemonDetail} from "../api/pokemons";
import {SET_POKEMONS} from "./types";

export const setPokemons = (payload) => {
  return {
    type: SET_POKEMONS,
    payload,
  };
};

export const getPokemonsDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetail(pokemon))
    );

    dispatch(setPokemons(pokemonsDetails));
  };
