import TypeWriter from "typewriter-effect";

export default function Screen3({ onReveal }: { onReveal: () => void }) {
  setTimeout(() => {
    onReveal();
  }, 5000);

  return (
    <div className="flex items-center justify-center h-full w-full bg-sky-400 rounded-xl text-xl flex flex-col text-center lg:text-left lg:flex-row items-center gap-12">
      <h1>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.typeString("YUMMMMMMM!").start();
          }}
        />
      </h1>
    </div>
  );
}
