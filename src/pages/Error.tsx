import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Error() {
  const errorCode = new URLSearchParams(window.location.search).get("code");
  return (
    <div className="app-gradient-lg min-h-screen flex flex-col items-center text-center text-xl font-semibold text-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-8">
        <div className="animate-pulse text-9xl leading-none">
          [ ER-{errorCode || 500} ]
        </div>
        <h2>
          Sorry, an error has occurred...
          <br />
          Please try again later :&#40;
        </h2>
        <Button variant="secondary" className="mt-8">
          <Link to="/">GO HOME</Link>
        </Button>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
}
