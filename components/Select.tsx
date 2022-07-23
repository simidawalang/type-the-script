import { ChangeEventHandler } from "react";

interface SelectProps {
  id: string;
  label?: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler;
  options: any[];
}
const Select = ({ id, label, options, value, onChange }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value={value} onChange={onChange}>
        {options &&
          options.map(({ text, value }) => <option key={value}>{text}</option>)}
      </select>
    </>
  );
};

export default Select;
