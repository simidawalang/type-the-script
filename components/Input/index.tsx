import React, { ChangeEventHandler } from "react";

interface InputProps {
  id?: string;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  value: string | number;
  onChange: ChangeEventHandler;
  min: string | number;
  max: string | number;
}

const Input = ({
  id,
  type,
  className,
  label,
  placeholder,
  value,
  min,
  max,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <label className="text-sm mb-1" htmlFor={id}>{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
