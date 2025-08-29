import { cn } from "../../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export default function Input(props: InputProps) {
  const {
    name,
    value,
    type,
    label,
    placeholder,
    onChange,
    required = false,
    className = "",
    ...rest
  } = props;
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <label htmlFor={name} className="mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={cn(
          `p-2 border border-gray-300 rounded-md bg-gray-100 focus:border-black focus:outline-none focus:ring-1 focus:ring-black`,
          className
        )}
        {...rest}
      />
    </div>
  );
}
