import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/pokemon-logo.png";
import Layout from "../../components/layout/Layout";
import PokemonCard from "../../components/pokemon-card/PokemonCard";

import {ChevronLeftIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import {getPokemonDetailsApi} from "../../api/pokemons";
import NotFavoriteImage from "../../assets/pikachu-triste.gif";
import {usePokemon} from "../../hooks/usePokemon";

export default function Favorites() {
  const {favorites, setPokemons, pokemons} = usePokemon();
  const navigate = useNavigate();

  const styleCard = () => {
    if (favorites.length === 0) {
      return "mt-10 grid grid-cols-1  gap-4 w-full";
    } else {
      return "mt-10 grid grid-cols-1 md:grid-cols-3  gap-4 w-full";
    }
  };

  useEffect(() => {
    (async () => {
      const pokemonArray = [];
      for await (const id of favorites) {
        const pokemonDetails = await getPokemonDetailsApi(id);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
          base_experience: pokemonDetails.base_experience,
        });
      }

      setPokemons(pokemonArray);
    })();
  }, [favorites]);

  const renderView = () => {
    if (favorites.length === 0) {
      return (
        <div className="flex justify-center items-center flex-col">
          <span className="text-lg font-medium my-5">
            You don't have favorites
          </span>
          <img
            src={NotFavoriteImage}
            className="w-[250px] h-[250px] rounded-lg"
          />
        </div>
      );
    } else {
      return pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ));
    }
  };

  return (
    <Layout>
      <section>
        <img
          src={logo}
          className="h-[200px] cursor-pointer"
          onClick={() => navigate("/", {replace: true})}
        />
      </section>

      <div>
        <h1 className="text-2xl font-bold text-center mt-5">Favorites</h1>
      </div>

      <div className=" w-full">
        <div className="mt-4 hover:cursor-pointer  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <ChevronLeftIcon
            className="w-6 h-6 text-slate-900 dark:text-slate-200"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className={styleCard()}>{renderView()}</div>
      </div>
      <div className="fixed right-6 bottom-5">
        <div className=" hover:cursor-pointer  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <ChevronUpIcon
            className="w-6 h-6 text-slate-900 dark:text-slate-200"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </Layout>
  );
}
