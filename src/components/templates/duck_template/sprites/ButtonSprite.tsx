import { useState } from "react";
import spriteUrl from "../assets/button.png";

const FRAME_WIDTH = 160;
const FRAME_HEIGHT = 160;

export default function ButtonSprite({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      style={{
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
        backgroundImage: `url(${spriteUrl})`,
        backgroundPosition: isHovered ? `-${FRAME_WIDTH}px 0` : "0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${FRAME_WIDTH * 2}px ${FRAME_HEIGHT}px`,
      }}
    />
  );
}
