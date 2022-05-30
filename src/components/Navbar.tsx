import { ImLoop } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import React from "react";

interface NavbarProps {
  getNewPokemon: () => void;
  openModal: () => void;
}

const NavbarButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-4 my-2 rounded-full shadow-2xl sm:transform sm:transition sm:duration-300 sm:hover:scale-125"
    >
      {children}
    </button>
  );
};

const Navbar = ({ getNewPokemon, openModal }: NavbarProps) => {
  return (
    <nav className="absolute top-0 left-0 sm:left-5 sm:top-5 flex flex-col rounded-3xl p-2">
      <NavbarButton onClick={getNewPokemon}>
        <ImLoop />
      </NavbarButton>
      <NavbarButton onClick={openModal}>
        <AiFillStar />
      </NavbarButton>
    </nav>
  );
};

export default Navbar;
