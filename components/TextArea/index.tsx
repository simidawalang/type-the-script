import { ChangeEventHandler } from "react";

interface TextAreaProps {
  id: string;
  className?: string;
  label?: string;
  name?: string;
  rows?: number | undefined;
  cols?: number | undefined;
  onChange?: ChangeEventHandler;
  value: string;
  placeholder?: string;
  readOnly?: boolean;
}

const TextArea = ({
  id,
  cols,
  rows,
  className,
  label,
  value,
  placeholder,
  onChange,
  readOnly = false

}: TextAreaProps) => {
  return (
    <div className={`textarea ${className}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        cols={cols}
        rows={rows}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
      ></textarea>
    </div>
  );
};

export default TextArea;
