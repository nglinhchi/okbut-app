import { useState } from "react";
import spriteUrl from "../assets/button.png";

export default function ButtonSprite({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="cursor-pointer"
      style={{
        width: "160px",
        height: "160px",
        backgroundImage: `url(${spriteUrl})`,
        backgroundPosition: isHovered ? "-160px 0" : "0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px 160px",
      }}
    ></div>
  );
}
