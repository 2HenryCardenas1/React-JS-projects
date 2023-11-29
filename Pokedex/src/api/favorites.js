import {FAVORITE_STORAGE} from "../utils/constants";

export function AddPokemonFavoriteApi(id) {
  try {
    const favorites = GetPokemonFavoriteApi();
    favorites.push(id);

    localStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export function GetPokemonFavoriteApi() {
  try {
    const response = localStorage.getItem(FAVORITE_STORAGE);

    if (!response) return [];

    return JSON.parse(response);
  } catch (error) {
    throw error;
  }
}

export function isPokemonFavoriteApi(id) {
  try {
    const response = GetPokemonFavoriteApi();
    return response.includes(id);
  } catch (error) {
    throw error;
  }
}

export function removePokemonFavoriteApi(id) {
  try {
    const favorites = GetPokemonFavoriteApi();
    const newFavorites = favorites.filter((item) => item !== id);

    localStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
