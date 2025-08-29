import Button from "../components/shared/Button";

export default function NotFound() {
  return (
    <div className="app-gradient-lg min-h-screen flex flex-col items-center text-center text-xl font-semibold text-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p-16">
        <div className="animate-pulse text-5xl leading-none">[ ER-404 ]</div>
        <p>Ooooopsie... this page doesn't exist :&#40;</p>
        <Button variant="secondary" linkTo="/">
          GO HOME
        </Button>
      </div>
      {/* <Footer className="mt-auto" /> */}
    </div>
  );
}
