import axios from "axios";
export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPokemonDetail = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
