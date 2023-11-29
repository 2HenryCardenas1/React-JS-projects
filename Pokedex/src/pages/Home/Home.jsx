import React, {useEffect} from "react";
import logo from "../../assets/pokemon-logo.png";
import Layout from "../../components/layout/Layout";
import PokemonCard from "../../components/pokemon-card/PokemonCard";
import Search from "../../components/search/Search";

import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {usePokemon} from "../../hooks/usePokemon";
export default function Home() {
  const {pokemons, nextUrl, loadPokemons, countFavorites, loadFirstPokemons} =
    usePokemon();

  const styleCard = () => {
    if (pokemons.length === undefined) {
      return " mt-10 grid grid-cols-1  gap-4 w-full";
    } else {
      return "mt-10 grid grid-cols-1 md:grid-cols-3  gap-4 w-full";
    }
  };

  useEffect(() => {
    loadFirstPokemons();
  }, []);

  return (
    <Layout>
      <section>
        <img
          src={logo}
          className="h-[200px] cursor-pointer"
          onClick={() => loadFirstPokemons()}
        />

        <Search />

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pokemons
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Here you can find all the pokemons that you want.
          </p>
        </div>
      </section>
      <div className="w-full">
        <div className="mt-8 hover:cursor-pointer  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <ChevronLeftIcon
            className="w-6 h-6 text-slate-900 dark:text-slate-200"
            onClick={() => loadFirstPokemons()}
          />
        </div>

        <div className={styleCard()}>
          {pokemons.length === undefined ? (
            <PokemonCard key={pokemons.id} pokemon={pokemons} />
          ) : (
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </div>
      </div>
      <div className="mt-12">
        {nextUrl !== null && pokemons.length !== undefined ? (
          <div className=" hover:cursor-pointer  animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <ChevronDownIcon
              className="w-6 h-6 text-slate-900 dark:text-slate-200"
              onClick={loadPokemons}
            />
          </div>
        ) : null}
      </div>
      <Link to="/favorites">
        <div className="fixed left-6 bottom-5 flex flex-col justify-center items-center">
          <span className="text-sm font-medium">My favorites</span>
          <div className="  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            {countFavorites}
          </div>
        </div>
      </Link>
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
