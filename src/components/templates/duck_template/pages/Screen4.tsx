import { useState } from "react";
import type { CardData } from "../../../../../types";
import TypeWriter from "typewriter-effect";
import { cn } from "../../../../../lib/utils";

interface Screen4Props {
  card: CardData;
}

export default function Screen4({ card }: Screen4Props) {
  const [showMessage, setShowMessage] = useState(false);
  const [showInscription, setShowInscription] = useState(false);

  setTimeout(() => {
    setShowMessage(true);
    setTimeout(() => {
      setShowInscription(true);
    }, 3000);
  }, 10000); // show message after 10 seconds

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-primary rounded-xl text-xl text-center md:text-left gap-8 p-6 md:p-8 overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full overflow-hidden rounded-xl bg-black">
        <img
          src={`https://media.giphy.com/media/${card.giphy_id}/giphy.gif`}
          alt="Selected GIF"
          className="h-auto w-full max-h-[60vh] object-contain"
        />
      </div>

      {/* TEXT SECTION */}
      <div
        className={cn(
          "flex flex-col gap-4 w-full h-fit md:h-full md:w-1/2 justify-between md:justify-center items-center md:items-start md:gap-12 md:p-4 overflow-y-auto",
          card.message.length > 100
            ? "text-sm md:text-lg"
            : card.message.length > 50
            ? "text-base md:text-xl"
            : "text-lg md:text-2xl"
        )}
      >
        <div className="flex flex-col gap-2">
          <h1>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("OK. ")
                  .pauseFor(500)
                  .typeString("THAT WAS FUN! ")
                  .pauseFor(1500)
                  .typeString("BUT...")
                  .start();
              }}
            />
          </h1>
          <h1
            className={cn(
              "transition-opacity duration-1000",
              showMessage ? "opacity-100" : "opacity-0"
            )}
          >
            {card.message}
          </h1>
        </div>
        <h1
          id="inscription"
          className={cn(
            "transition-opacity duration-1000",
            showInscription ? "opacity-100" : "opacity-0"
          )}
        >
          - FROM {card.sender.toUpperCase()}, TO {card.recipient.toUpperCase()}
        </h1>
      </div>
    </div>
  );
}
