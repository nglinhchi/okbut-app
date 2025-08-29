import { useEffect, useState } from "react";
import spriteUrl from "../assets/duck.png";

export type DuckAction = "dance" | "eat" | "die";

interface DuckSpriteProps {
  action: DuckAction;
  className?: string;
}

const FRAME_WIDTH = 200;
const FRAME_HEIGHT = 200;

const FRAME_COUNTS: Record<DuckAction, number> = {
  dance: 2,
  die: 3,
  eat: 5,
};

const START_FRAME_INDEX: Record<DuckAction, number> = {
  dance: 0,
  die: 2, // uses frames 2–4
  eat: 5, // uses frames 5–9
};

export function DuckSprite(props: DuckSpriteProps) {
  const { action, className } = props;
  const start = START_FRAME_INDEX[action];
  const count = FRAME_COUNTS[action];

  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0); // reset to first frame of current action
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % count);
    }, 300); // 300ms per frame

    return () => clearInterval(interval);
  }, [action, count]);

  return (
    <div
      className={className}
      style={{
        width: FRAME_WIDTH,
        height: FRAME_HEIGHT,
        backgroundImage: `url(${spriteUrl})`,
        backgroundPosition: `-${(start + frame) * FRAME_WIDTH}px 0`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${10 * FRAME_WIDTH}px ${FRAME_HEIGHT}px`,
      }}
    />
  );
}
