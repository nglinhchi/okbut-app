interface CardProps {
  className?: string;
}

export default function Card(props: CardProps) {
  const { className = "" } = props;

  return (
    <div
      className={`w-full bg-white rounded-2xl p-8 text-black shadow-xl flex flex-col gap-4 ${className}`}
    ></div>
  );
}
