import { useSearchParams } from "react-router-dom";
import Footer from "../components/shared/Footer";
import ShareLink from "../components/shared/ShareLink";
import TypeWriter from "typewriter-effect";
import NotFound from "./NotFound";

export default function Share() {
  const cardId = useSearchParams()[0].get("card_id");

  if (cardId === null) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] text-center w-full h-[30vh] sm:h-[40vh]">
        <h2>
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString("Hoooooooray!").start();
            }}
          />
        </h2>
        <p>Your card is now ready to share.</p>
      </div>
      <div className="app-gradient-sm h-[50vh] w-full flex items-center justify-center">
        <ShareLink cardId={cardId} />
      </div>
      <Footer />
    </div>
  );
}
