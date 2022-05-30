interface NavbarProps {
  getNewPokemon: () => void;
  openModal: () => void;
}

const Navbar = ({ getNewPokemon, openModal }: NavbarProps) => {
  return (
    <nav className="grid grid-cols-2 box sm:fixed bg-white w-full h-14 sm:h-10 items-center justify-center z-50">
      <button className="h-full bg-green-600" onClick={getNewPokemon}>
        New pokemon
      </button>
      <button className="h-full bg-yellow-200" onClick={openModal}>
        Favorites
      </button>
    </nav>
  );
};

export default Navbar;
