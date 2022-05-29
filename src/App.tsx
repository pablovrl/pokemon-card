import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";

const addZeros = (num: number) => {
  if (num < 10) return `00${num}`;
  if (num < 100) return `0${num}`;
  return num;
};

const randomPokemon = () => {
  const random = Math.floor(Math.random() * 400) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${random}`;
};

// function to make first letter of string uppercase
const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const { data } = await axios.get(randomPokemon());
    setPokemon(data);
  };

  const getNewPokemon = () => {
    getPokemon();
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (!pokemon)
    return (
      <div className="flex min-w-screen min-h-screen items-center justify-center sm:bg-gradient-to-tr from-green-500 to-blue-300">
        <Spinner />
        <h1 className="text-white text-6xl">Loading...</h1>
      </div>
    );

  return (
    <div className="flex min-w-screen min-h-screen items-center justify-center sm:bg-gradient-to-tr from-green-500 to-blue-300">
      <div className="sm:shadow-2xl p-4 bg-green-100 relative w-screen h-screen sm:w-auto sm:h-full sm:rounded-2xl">
        <div className="h-64 w-64 bg-white absolute left-0 right-0 rounded-full opacity-70 ml-auto mr-auto top-10" />
        <div className="flex justify-center w-full mt-10">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            className="h-72 z-20"
          />
        </div>
        <div className="text-center">
          <p className="bg-green-200 inline-block rounded-xl px-4">
            #{addZeros(pokemon.id)}
          </p>
          <h1 className="text-4xl text-center mt-1">
            {capitalize(pokemon.name)}
          </h1>
          <p className="mt-3 text-sm">
            Type: {capitalize(pokemon.types[0].type.name)}{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 pb-6">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="flex flex-col items-center">
              <p className="text-2xl font-bold">{stat.base_stat}</p>
              <p className="text-sm">{capitalize(stat.stat.name)}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute bg-white z-30 top-3 right-3 h-10 rounded-full px-4 shadow-xl sm:hover:scale-110"
        onClick={getNewPokemon}
      >
        Change pokemon
      </button>
    </div>
  );
}

export default App;
