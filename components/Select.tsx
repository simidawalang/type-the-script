import { ChangeEventHandler } from "react";

interface SelectProps {
  id: string;
  label?: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler;
  options: any[];
  placeholder?: string;
}
const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder
}: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options && 
        <>
          {options.map(({ value }) => <option key={value}>{value}</option>)}</>}
      </select>
    </>
  );
};

export default Select;
