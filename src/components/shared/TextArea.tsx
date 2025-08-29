import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
  maxLength?: number;
}

export default function Textarea({
  name,
  value,
  label,
  placeholder = "",
  onChange,
  required = false,
  rows = 4,
  className = "",
  maxLength,
  ...rest
}: TextareaProps) {
  const maxLengthLabel =
    maxLength && value.length ? (
      <span className="m-1 text-xs text-gray-500 ml-2">
        {maxLength - value.length} characters remaining ({maxLength} maximum)
      </span>
    ) : null;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className={`resize-none rounded-md border border-gray-300 p-2 bg-gray-100 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black ${className}`}
        {...rest}
      />
      {maxLengthLabel}
    </div>
  );
}
