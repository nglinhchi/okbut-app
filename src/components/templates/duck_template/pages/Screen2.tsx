import TypeWriter from "typewriter-effect";
import { DuckSprite, type DuckAction } from "../sprites/DuckSprite";
import FoodSprite from "../sprites/FoodSprite";
import type { CardData } from "../../../../../types";
import { cn } from "../../../../../lib/utils";
import { useEffect, useState } from "react";

interface Screen2Props {
  card: CardData;
  onFedCorrectly: () => void;
}

export default function Screen2(props: Screen2Props) {
  const { card, onFedCorrectly } = props;
  const [duckAction, setDuckAction] = useState<DuckAction>("dance");
  const [hasFed, setHasFed] = useState(false);
  const [isFeeding, setIsFeeding] = useState(false);
  const [showFood, setShowFood] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFood(true);
    }, 32000); // show food options after 25 seconds of typewriting
  }, []);

  function handleFeed(foodType: string) {
    setIsFeeding(true);
    if (hasFed) return;

    if (foodType === "corn") {
      setDuckAction("eat");
      setHasFed(true);
      setTimeout(() => {
        onFedCorrectly();
        setIsFeeding(false);
      }, 3000);
    } else {
      setDuckAction("die");
      setTimeout(() => {
        setDuckAction("dance");
        setIsFeeding(false);
      }, 2000);
    }
  }

  return (
    <div
      className={cn(
        "flex items-center justify-start h-full w-full rounded-xl flex flex-col text-center lg:justify-center lg:text-left lg:flex-row gap-6 lg:gap-12",
        `${
          duckAction === "die"
            ? "bg-accent"
            : duckAction === "eat"
            ? "bg-tertiary"
            : "bg-secondary"
        }`
      )}
    >
      <div className="flex flex-col items-center justify-start pt-[5vh] flex-1 lg:flex-none gap-4">
        <h1 className="w-full">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString(`HI ${card.recipient}.`)
                .pauseFor(500)
                .typeString(`<br /> IT'S ${card.sender}.`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`<br/> I WANTED TO TELL YOU SOMETHING...`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`<br /> BUT YOU MUST FEED THE DUCK FIRST...`)
                .pauseFor(2000)
                .typeString(`<br/> BEFORE IT GETS HANGRY!!!`)
                .start();
            }}
          />
        </h1>
        <div
          className={cn(
            "flex flex-row items-center justify-center gap-8 transition-opacity duration-1000",
            showFood ? "opacity-100" : "opacity-0"
          )}
        >
          <FoodSprite
            foodType="tomato"
            onClick={handleFeed}
            isDisabled={isFeeding}
          />
          <FoodSprite
            foodType="poop"
            onClick={handleFeed}
            isDisabled={isFeeding}
          />
          <FoodSprite
            foodType="corn"
            onClick={handleFeed}
            isDisabled={isFeeding}
          />
        </div>
      </div>
      <DuckSprite action={duckAction} className="mb-[5vh] lg:mb-0" />
    </div>
  );
}
