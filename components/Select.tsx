interface SelectProps {
  id: string;
  label?: string;
  value: string | number;
  onChange: MouseEvent;
  options: any[];
}
const Select = ({ id, label, options, value }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value={value}>
        {options &&
          options.map(({ value }) => <option key={value}>{value}</option>)}
      </select>
    </>
  );
};

export default Select;
