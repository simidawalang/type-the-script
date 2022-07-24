import React, { MouseEventHandler, useState } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  content: string;
  disabled?: boolean;
}

const Button = ({ type, onClick, content, disabled }: ButtonProps) => {
    const [isDisabled, setIsDisabled] = useState(disabled)
  return (
    <button type={type} onClick={onClick} disabled={isDisabled}>
      {content}
    </button>
  );
};

export default Button;
