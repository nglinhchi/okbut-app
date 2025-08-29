import ButtonSprite from "../sprites/ButtonSprite";

interface Screen1Props {
  onStart: () => void;
}

export default function Screen1({ onStart }: Screen1Props) {
  return (
    <div className="flex items-center justify-center h-full w-full bg-violet-400 rounded-xl">
      <ButtonSprite onClick={onStart} />
    </div>
  );
}
