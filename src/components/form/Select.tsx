type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: Option[];
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function Select({
  options,
  value,
  onChange,
  placeholder,
  className = "",
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`
        w-full border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-2 py-1 border-gray-300 shadow-sm rounded-md
        ${className}
      `}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
