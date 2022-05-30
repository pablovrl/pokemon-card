import FavoritesPokemons from "../interfaces/FavoritesPokemons";
import { FiTrash } from "react-icons/fi";

const FavoritesTable = ({
  currentItems,
}: {
  currentItems: FavoritesPokemons[];
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Sprite
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((pokemon) => (
                  <tr key={pokemon.id} className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img src={pokemon.sprite} style={{ width: "100px" }} />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {pokemon.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {pokemon.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button>
                        <FiTrash size="20" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesTable;
