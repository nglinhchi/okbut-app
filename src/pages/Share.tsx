import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import ShareLink from "../components/ShareLink";

export default function Share() {
  const cardId = useSearchParams()[0].get("card_id");
  // const cardId = "Xskalg8SVl-7oq6TcRFTX"; // TODO get from URL param or state

  if (cardId === null) {
    // TODO handle missing card_id (show error message)
    return <></>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] py-[15vh] text-center w-full">
        <h1>Hooooooooray!</h1>
        <h2>
          Your card is now <br />
          ready to share.
        </h2>
      </div>
      <div className="app-gradient-sm h-fit w-full px-[10vw] py-[10vh] flex flex-col items-center justify-center gap-8">
        <ShareLink cardId={cardId} />
      </div>
      <Footer />
    </div>
  );
}
