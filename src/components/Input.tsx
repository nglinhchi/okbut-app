interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
}

export default function Input(props: InputProps) {
  const { type, label, placeholder } = props;
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md bg-gray-100 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
}
