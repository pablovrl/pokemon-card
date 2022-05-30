import FavoritesPokemons from "../interfaces/FavoritesPokemons";
import { useState } from "react";
import Pagination from "./Pagination";
import FavoritesTable from "./FavoritesTable";

interface FavoritesModalProps {
  showModal: boolean;
  closeModal: () => void;
  favoritesPokemons: FavoritesPokemons[];
}

const FavoritesModal = ({
  showModal,
  closeModal,
  favoritesPokemons,
}: FavoritesModalProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoritesPokemons.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto sm:w-full sm:my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="h-screen sm:h-auto border-0 sm:rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Your favorites</h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                {currentItems.length === 0 ? (
                  <h4 className="text-2xl text-center py-10">
                    You haven't added anything to favorites yet :(
                  </h4>
                ) : (
                  <FavoritesTable currentItems={currentItems} />
                )}
                {/*footer*/}
                <div className="flex items-center justify-center slate-200 rounded-b h-16">
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={favoritesPokemons.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default FavoritesModal;
