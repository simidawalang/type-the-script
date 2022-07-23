import { ChangeEventHandler} from "react";

interface TextAreaProps {
  id: string;
  label?: string;
  name?: string;
  rows?: string | number;
  cols?: string | number;
  onChange: ChangeEventHandler;
  value: string;
  placeholder?: string;
}

const TextArea = ({ id, label, value, placeholder, onChange }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default TextArea;
