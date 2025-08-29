import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
const BUTTON_VARIANTS = {
  default: "bg-black text-white border border-transparent",
  muted: "bg-gray-200 text-black border border-gray-300",
  //   primary: "bg-primary text-black", // currently used for hover style
  secondary: "bg-secondary text-white border border-transparent",
};

type ButtonVariant = keyof typeof BUTTON_VARIANTS;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
  linkTo?: string;
}

export default function Button(props: ButtonProps) {
  const {
    variant = "default",
    onClick,
    className,
    children,
    linkTo = "",
    ...rest
  } = props;

  const variantClassName = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.default;

  const buttonClassName = cn(
    variantClassName,
    "button font-semibold px-6 py-2 rounded-xl w-fit h-fit transition align-middle text-center",
    className
  );

  return linkTo ? (
    <Link to={linkTo} className={buttonClassName}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}
