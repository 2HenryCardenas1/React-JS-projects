import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
export default function PokemonList({pokemons}) {
 
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(5).fill(""),
};
