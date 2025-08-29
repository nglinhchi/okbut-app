import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import Footer from "../components/shared/Footer";

export default function Error() {
  const errorCode = new URLSearchParams(window.location.search).get("code");
  return (
    <div className="app-gradient-lg min-h-screen flex flex-col items-center text-center text-xl font-semibold text-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-8">
        <div className="animate-pulse text-9xl leading-none">
          [ ER-{errorCode || 500} ]
        </div>
        <p>Sorry, an error has occurred... Please try again later :&#40;</p>
        <Button variant="secondary" className="mt-8">
          <Link to="/">GO HOME</Link>
        </Button>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
}
