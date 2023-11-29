import React, {useEffect, useState} from "react";
import {getPokemonDetailsApi} from "../../api/pokemons";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Details({pokemon}) {
  const [details, setDetails] = useState({});
  const color = getColorByPokemonType(pokemon.type);
  const types = details.types;
  const stats = details.stats;
  useEffect(() => {
    (async () => {
      const response = await getPokemonDetailsApi(pokemon.id);
      setDetails(response);
    })();
  }, [pokemon]);

  const barStyles = (num) => {
    const color = num > 49 ? "green" : "red";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <section className="mt-5 rounded-lg shadow-xl">
      <div
        className=" w-[350px] md:w-[500px] max-w-[500px] p-5 rounded-t-lg"
        style={{backgroundColor: color}}
      >
        <p className="flex flex-row justify-between pt-5">
          <span className="font-bold text-lg text-white">
            {pokemon.name.toUpperCase()}
          </span>
          <span className="text-lg ml-2 text-white">#{pokemon.id}</span>
        </p>

        <figure className="w-full">
          <img src={pokemon.imagen} alt={pokemon.name} />
        </figure>
        <div className="mt-10 flex flex-row items-center justify-center">
          {types?.map((type, index) => (
            <div key={index} className="overflow-hidden">
              <span className="text-white text-lg font-semibold">
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" w-[350px] md:w-[500px] max-w-[500px] p-5 rounded-lg shadow-xl">
          <p className="text-lg font-bold text-gray-700">Stats</p>
          <div className="mt-5">
            {stats?.map((item, index) => (
              <div key={index} className="flex flex-row px-3 py-1">
                <p className="text-[#6b6b6b] text-base w-[30%] text-start">
                  {item.stat.name.charAt(0).toUpperCase() +
                    item.stat.name.slice(1)}
                </p>
                <div className="flex flex-row items-center w-[70%]">
                  <span>{item.base_stat}</span>

                  <div className=" w-full h-2 bg-gray-200 rounded-full mx-3 overflow-hidden">
                    <div
                      className="h-2 rounded-full"
                      style={barStyles(item.base_stat)}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
