const PokemonImage = ({ id }: { id: number }) => {
  return (
    <div>
      <div className="h-64 w-64 bg-white absolute left-0 right-0 rounded-full opacity-70 ml-auto mr-auto top-10" />
      <div className="flex justify-center w-full mt-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          className="h-72 z-20"
        />
      </div>
    </div>
  );
};
export default PokemonImage;
