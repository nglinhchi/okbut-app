import ButtonSprite from "../sprites/ButtonSprite";

interface Screen1Props {
  onStart: () => void;
}

export default function Screen1({ onStart }: Screen1Props) {
  return (
    <div className="flex items-center justify-center h-full w-full bg-primary">
      <ButtonSprite onClick={onStart} />
    </div>
  );
}
