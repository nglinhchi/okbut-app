import TypeWriter from "typewriter-effect";

export default function Screen3({ onReveal }: { onReveal: () => void }) {
  setTimeout(() => {
    onReveal();
  }, 3000);

  return (
    <div className="flex items-center justify-center h-full w-full bg-sky-400 rounded-xl text-xl flex-col text-center lg:text-left lg:flex-row gap-12">
      <h1>
        <TypeWriter
          options={{
            delay: 50, // deafult = 75ms
            deleteSpeed: 25, // default = 50ms
          }}
          onInit={(typewriter) => {
            typewriter.typeString("YUMMMMMMM!").start();
          }}
        />
      </h1>
    </div>
  );
}
