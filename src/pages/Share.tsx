import Footer from "../components/Footer";
import ShareLink from "../components/ShareLink";

export default function Share() {
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
        <ShareLink />
      </div>
      <Footer />
    </div>
  );
}
