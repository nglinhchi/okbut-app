export default function Loading() {
  return (
    <div className="app-gradient-lg min-h-screen flex flex-col items-center text-center text-xl font-semibold text-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-8">
        <div className="animate-spin text-6xl">🌀</div>
        <h2 className="italic">Hang tight, it's cooking...</h2>
      </div>
    </div>
  );
}
