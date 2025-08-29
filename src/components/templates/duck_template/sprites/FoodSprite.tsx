// Mapping food types to image imports
import cornUrl from "../assets/corn.png";
import tomatoUrl from "../assets/tomato.png";
import poopUrl from "../assets/poop.png";

const foodMap: Record<string, string> = {
  corn: cornUrl,
  tomato: tomatoUrl,
  poop: poopUrl,
};

type Props = {
  foodType: "corn" | "tomato" | "poop";
  onClick: (food: string) => void;
  isDisabled?: boolean;
  className?: string;
};

export default function FoodSprite({
  foodType,
  onClick,
  isDisabled = false,
  className = "",
}: Props) {
  const imageUrl = foodMap[foodType];

  return (
    <img
      src={imageUrl}
      alt={foodType}
      className={`w-14 h-14 cursor-pointer select-none ${
        isDisabled ? "opacity-20 pointer-events-none" : "hover:scale-120"
      } ${className}`}
      onClick={() => onClick(foodType)}
    />
  );
}
