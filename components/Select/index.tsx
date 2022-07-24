import { ChangeEventHandler } from "react";

interface SelectProps {
  id: string;
  label?: string;
  className?: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler;
  options: any[];
  placeholder?: string;
}
const Select = ({
  id,
  className,
  label,
  options,
  value,
  onChange,
  placeholder,
}: SelectProps) => {
  return (
    <div className="select">
      <label htmlFor={id}>{label}</label>
      <select
        className={className}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options && (
          <>
            {options.map(({ value }) => (
              <option key={value}>{value}</option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Select;
