import {createContext, useEffect, useState} from "react";
import {GetPokemonFavoriteApi} from "../api/favorites";
import {
  getPokemonDetailsByUrlApi,
  getPokemonsApi,
  searchPokemonApi,
} from "../api/pokemons";
export const PokemonContext = createContext();
export default function PokemonProvider({children}) {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  //favorite
  const [countFavorites, setCountFavorites] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const countFavorites = GetPokemonFavoriteApi();

    setFavorites(countFavorites);
  }, []);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);

      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,

          base_experience: pokemonDetails.base_experience,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      throw error;
    }
  };

  const loadFirstPokemons = async () => {
    try {
      setPokemons([]);
      const response = await getPokemonsApi(null);

      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,

          base_experience: pokemonDetails.base_experience,
        });
      }

      setPokemons([...pokemonsArray]);
    } catch (error) {
      throw error;
    }
  };

  //FIND POKEMON

  const findPokemon = async (namePokemon) => {
    if (namePokemon === "") {
      loadFirstPokemons();
    }
    try {
      const response = await searchPokemonApi(namePokemon);

      const pokemonsArray = [];

      pokemonsArray.push({
        id: response.id,
        name: response.name,
        type: response.types[0].type.name,
        order: response.order,
        imagen: response.sprites.other["official-artwork"].front_default,

        base_experience: response.base_experience,
      });
      setPokemons(...pokemonsArray);
    } catch (error) {
      throw error;
    }
  };

  const valuesContext = {
    pokemons,
    setPokemons,
    nextUrl,
    loadPokemons,
    favorites,
    setFavorites,
    countFavorites,
    setCountFavorites,
    findPokemon,
    loadFirstPokemons,
  };

  return (
    <PokemonContext.Provider value={valuesContext}>
      {children}
    </PokemonContext.Provider>
  );
}
