import {API_HOST} from "../utils/constants";
export async function getPokemonsApi(endpointUrl) {
  const URL = `${API_HOST}pokemon?limit=20&offset=0`;
  try {
    const response = await fetch(endpointUrl || URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function searchPokemonApi(pokemonName) {
  const URL = `${API_HOST}pokemon/${pokemonName}`;

  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  const URL = `${API_HOST}pokemon/${id}`;
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
