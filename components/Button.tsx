import React, { MouseEventHandler } from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    content: string;
}

const Button = ({type, onClick, content}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>{content}</button>
    );
}

export default Button;