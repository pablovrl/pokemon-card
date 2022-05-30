import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import FavoriteButton from "./components/FavoriteButton";
import Pokemon from "./interfaces/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import PokemonImage from "./components/PokemonImage";
import Navbar from "./components/Navbar";
import FavoritesModal from "./components/FavoritesModal";
import FavoritesPokemons from "./interfaces/FavoritesPokemons";

const randomPokemon = () => {
  const random = Math.floor(Math.random() * 800) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${random}`;
};

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [showModal, setShowModal] = useState(false);
  const [favoritesPokemons, setFavoritesPokemons] = useState<
    FavoritesPokemons[]
  >([]);
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    const isFavorite = favoritesPokemons.find((p) => p.id === pokemon?.id);
    isFavorite ? setIsInFavorites(true) : setIsInFavorites(false);
  }, [favoritesPokemons, pokemon]);

  const addToFavorites = () => {
    if (pokemon) {
      const newFavorites = [
        ...favoritesPokemons,
        {
          id: pokemon.id,
          name: pokemon.name,
          sprite: pokemon.sprites.front_default,
        },
      ];
      setFavoritesPokemons(newFavorites);
      console.log(favoritesPokemons);
    }
  };

  const removeFromFavorites = () => {
    if (pokemon) {
      const newFavorites = favoritesPokemons.filter((p) => p.id !== pokemon.id);
      setFavoritesPokemons(newFavorites);
    }
  };

  const getPokemon = async () => {
    const { data } = await axios.get(randomPokemon());
    setPokemon(data);
  };

  const getNewPokemon = () => {
    getPokemon();
  };

  if (!pokemon) return <Loading />;

  return (
    <main className="flex flex-col h-screen sm:bg-gradient-to-tr from-green-500 to-blue-300">
      <div className="h-full flex items-center justify-center flex-col">
        <div className="h-screen w-full sm:h-auto sm:shadow-2xl p-4 bg-green-100 relative sm:w-auto sm:rounded-2xl">
          <FavoriteButton
            isInfavorites={isInFavorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
          <PokemonImage id={pokemon.id} />
          <PokemonInfo pokemon={pokemon} />
        </div>
        <Navbar
          getNewPokemon={getNewPokemon}
          openModal={() => {
            setShowModal(true);
          }}
        />
      </div>
      <FavoritesModal
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        favoritesPokemons={favoritesPokemons}
      />
    </main>
  );
}

export default App;
