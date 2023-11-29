import React, {useEffect, useState} from "react";

import {HeartIcon} from "@heroicons/react/24/solid";

import {Link} from "react-router-dom";
import {
  AddPokemonFavoriteApi,
  GetPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorites.js";
import {usePokemon} from "../../hooks/usePokemon.js";
import getColorByPokemonType from "../../utils/getColorByPokemonType.js";

export default function PokemonCard({pokemon}) {
  const {favorites, setFavorites, countFavorites, setCountFavorites} =
    usePokemon();

  

  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = (event, pokemon) => {
    event.stopPropagation();
    try {
      AddPokemonFavoriteApi(pokemon);
      setFavorites([...favorites, pokemon]);
      setCountFavorites(countFavorites + 1);
    } catch (error) {
      throw error;
    }
  };

  const removeFavorites = (event, pokemon) => {
    event.stopPropagation();
    try {
      removePokemonFavoriteApi(pokemon.id);
      setFavorites(favorites.filter((item) => item !== pokemon.id));
      setCountFavorites(countFavorites - 1);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const renderIconFav = () => {
    if (isFavorite) {
      return (
        <div
          className="z-10 absolute top-0 right-0 flex justify-center items-center  w-8 h-8 rounded-full m-2 p-1 "
          onClick={(event) => removeFavorites(event, pokemon)}
        >
          <HeartIcon className="w-6 h-6 text-[#FFCC00]" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center  w-8 h-8 rounded-full m-2 p-1 hover:animate-bounce"
          onClick={(event) => addToFavorites(event, pokemon.id)}
        >
          <HeartIcon className="w-6 h-6 text-white" />
        </div>
      );
    }
  };

  useEffect(() => {
    try {
      const countFavorites = GetPokemonFavoriteApi();

      const isFavorite = isPokemonFavoriteApi(pokemon.id);
      setCountFavorites(countFavorites.length);
      setIsFavorite(isFavorite);
    } catch (error) {
      throw error;
    }
  }, [favorites, pokemon.id, countFavorites]);

  return (
    <div
      style={{backgroundColor: getColorByPokemonType(pokemon.type)}}
      className=" cursor-pointer w-full h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-bold">
          {pokemon.base_experience} xp
        </span>
        <Link to={`/pokemon/${pokemon.id}`} state={{data: pokemon}}>
          <img
            className="w-full h-full object-contain rounded-lg"
            src={pokemon.imagen}
            alt={pokemon.name}
          />
        </Link>

        {renderIconFav(pokemon.id)}
      </figure>
      <p className="flex justify-between mx-4 items-center">
        <span className="text-lg font-medium text-white">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
        <span className="text-lg font-medium">
          #{`${pokemon.order}`.padStart(3, 0)}
        </span>
      </p>
    </div>
  );
}
