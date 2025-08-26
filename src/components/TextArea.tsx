import React from "react";

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
  required?: boolean;
}

export default function Textarea({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  className = "",
  required = false,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`resize-none rounded-md border border-gray-300 p-2 bg-gray-100 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black ${className}`}
      />
    </div>
  );
}
