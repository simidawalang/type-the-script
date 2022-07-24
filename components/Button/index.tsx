import React, { MouseEventHandler, useState } from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  content: string;
  disabled?: boolean;
}

const Button = ({ className, type, onClick, content, disabled }: ButtonProps) => {
    const [isDisabled, setIsDisabled] = useState(disabled)
  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
