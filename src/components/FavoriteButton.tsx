import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface FavoriteButtonProps {
  isInfavorites: boolean;
  removeFromFavorites: () => void;
  addToFavorites: () => void;
}

const FavoriteButton = ({
  isInfavorites,
  removeFromFavorites,
  addToFavorites,
}: FavoriteButtonProps) => {
  return (
    <div className="flex justify-end">
      {isInfavorites ? (
        <button onClick={removeFromFavorites}>
          <AiFillStar className="text-yellow-500" size={30} />
        </button>
      ) : (
        <button onClick={addToFavorites}>
          <AiOutlineStar size="30" />
        </button>
      )}
    </div>
  );
};

export default FavoriteButton;
