import { cn } from "../../../lib/utils";
const BUTTON_VARIANTS = {
  default: "bg-black text-white",
  muted: "bg-gray-200 text-black",
  //   primary: "bg-primary text-black", // currently used for hover style
  secondary: "bg-secondary text-black",
};

type ButtonVariant = keyof typeof BUTTON_VARIANTS;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { variant = "default", onClick, className, children, ...rest } = props;
  const variantClassName = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.default;

  return (
    <button
      onClick={onClick}
      className={cn(
        variantClassName,
        "px-6 py-2 rounded-xl w-fit h-fit transition border border-gray-300",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
