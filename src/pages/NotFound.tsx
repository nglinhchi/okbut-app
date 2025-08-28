import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import Footer from "../components/shared/Footer";

export default function NotFound() {
  return (
    <div className="app-gradient-lg min-h-screen flex flex-col items-center text-center text-xl font-semibold text-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-8">
        <div className="animate-pulse text-9xl leading-none">[ ER-404 ]</div>
        <h2>
          Ooooopsie...
          <br />
          this page doesn't exist :&#40;
        </h2>
        <Button variant="secondary" className="mt-8">
          <Link to="/">GO HOME</Link>
        </Button>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
}
