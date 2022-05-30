import Pokemon from "../interfaces/Pokemon";

const addZeros = (num: number) => {
  if (num < 10) return `00${num}`;
  if (num < 100) return `0${num}`;
  return num;
};

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const PokemonInfo = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <>
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
    </>
  );
};

export default PokemonInfo;
