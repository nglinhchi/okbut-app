interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  const { className = "", children } = props;

  return (
    <div
      className={`w-full bg-white rounded-2xl p-4 text-black shadow-xl flex flex-col gap-4 ${className}`}
    >
      {children}
    </div>
  );
}
